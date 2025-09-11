import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <p>This is not the page you...Burrrpp looking for.</p>
      <Link to="/">Try this one</Link>
    </div>
  );
};
