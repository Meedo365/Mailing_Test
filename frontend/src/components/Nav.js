import { Navbar } from "flowbite-react";
import img from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { Table } from "flowbite-react";

export default function NavbarWithCTAButton() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="/">
        <img src={img} className="mr-3 h-6 sm:h-9 rounded-full" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Assessment
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link className="cursor-pointer">Sign Out</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
