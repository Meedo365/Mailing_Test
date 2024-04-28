import { Navbar } from "flowbite-react";
import img from "../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function NavbarWithCTAButton() {
  let logOut = () => {
    localStorage.removeItem("inbox");
  };
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} to={"/home"}>
        <img src={img} className="mr-3 h-6 sm:h-9 rounded-full" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Assessment
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/home" active>
          Home
        </Navbar.Link>
        <Navbar.Link className="cursor-pointer" href="/" onClick={logOut}>
          Sign Out
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
