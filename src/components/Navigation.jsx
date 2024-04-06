// This will contain links to the About Me, Portfolio, Contact, Resume
import React from "react";

import { Link } from "react-router-dom";

const style = "hover:underline underline-offset-2";

const Navigation = () => {
  return (
    <div className="w-screen flex justify-center">
      <div className="flex w-4/5 p-5 items-center justify-between border-2 border-black bg-transparent text-black gap-5">
        <div className="text-2xl">Maverick Wolfe</div>
        <div className="flex gap-4">
          <Link to={"/about"} className={style}>
            About Me
          </Link>
          <Link to={"/projects"} className={style}>
            Projects
          </Link>
          <Link to={"/contact"} className={style}>
            Contact
          </Link>
          <Link to={"/resume"} className={style}>
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
