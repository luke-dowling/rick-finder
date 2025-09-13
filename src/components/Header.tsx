import { Link } from "react-router-dom";
import HomeIcon from "/rick.jpeg";

const Header = () => {
  return (
    <header className="bg-black sticky top-0 z-50 shadow-[0_0_20px_rgba(34,197,94,0.5)]">
      <div className="container flex justify-between items-center px-5 py-4 lg:py-5">
        <Link to="/">
          <h1 className="font-schwifty text-green-400 text-3xl md:text-4xl animate-portal-flicker">
            Rick Finder
          </h1>
        </Link>
        <Link to="/">
          <img
            src={HomeIcon}
            alt="rick icon"
            className="w-10 h-10 rounded-full border-2 border-green-400 shadow-[0_0_10px_rgba(34,197,94,0.7)] hover:scale-110 transition transform"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
