export default function LogoContainer({ imgArray }) {
  return (
    <div className="logo-container animate-slider shrink-0 whitespace-nowrap">
      {imgArray.map((el, idx) => (
        <img
          key={idx}
          className="mx-10 inline-block"
          src={el}
          alt="Brand Icon"
        />
      ))}
    </div>
  );
}
