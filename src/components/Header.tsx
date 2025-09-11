import { Link } from "react-router-dom";
import { SearchForm } from "./SearchForm";
import HomeIcon from "/rick.jpeg";

const Header = () => {
  return (
    <header className="bg-sky-300 sticky top-0">
      <div className="flex justify-end pr-5 pt-3">
        <Link to="/">
          <img
            src={HomeIcon}
            alt="rick icon"
            className="w-10 h-10 rounded-full"
          />
        </Link>
      </div>
      <SearchForm />
    </header>
  );
};

export default Header;
