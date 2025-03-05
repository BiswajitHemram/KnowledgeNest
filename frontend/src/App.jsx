import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="ml:px-6 px-3 lg:px-10 2xl:container 2xl:mx-auto 2xl:overflow-hidden 2xl:px-14">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
