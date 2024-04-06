import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-screen p-4">
      <div className=" flex mb-5 gap-5 justify-center">
        <Link className="hover:underline underline-offset-2" to="https://www.linkedin.com/in/maverick-wolfe-95946b229/">
          LinkedIn
        </Link>
        <Link className="hover:underline underline-offset-2" to="https://github.com/maverickwolfe21">
          GitHub
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
