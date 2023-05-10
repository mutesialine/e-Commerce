import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link
      to="/"
      className=" flex justify-start items-center h-20 px-16 text-4xl font-bold text-white bg-cyan-600 hover:opacity-90"
    >
      Welcome AShop
    </Link>
  );
};

export default Header;
