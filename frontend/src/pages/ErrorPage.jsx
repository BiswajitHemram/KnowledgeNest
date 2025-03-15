import { useRouteError, Link, useNavigate, useParams } from "react-router-dom";
import styles from "./ErrorPage.module.css";

export default function ErrorPage() {
  const error = useRouteError();
  const status = error?.status || "404";
  const message = error?.statusText || "Page Not Found";
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1); // Go back if history exists
    } else {
      navigate("/"); // Fallback to home if no history exists
    }
  };

  return (
    <div className={styles.errorBody}>
      <div className={styles.noise}></div>
      <div className={styles.overlay}></div>
      <div className={styles.terminal}>
        <h1>
          Error <span className={styles.errorCode}>{status}</span>
        </h1>
        <p className={styles.output}>
          {message === "Not Found"
            ? "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
            : message}
        </p>
        <p className={`${styles.output} ${styles.links}`}>
          Please try to{" "}
          <button onClick={handleGoBack} className={styles.goBackButton}>
            go back
          </button>{" "}
          or <Link to="/">return to the homepage</Link>.
        </p>
        <p className={styles.output}>Good luck.</p>
      </div>
    </div>
  );
}
