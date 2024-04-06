// This will contain links to the About Me, Portfolio, Contact, Resume
import React, { useEffect } from "react";

import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const { pathname } = useLocation();

  useEffect(() => {}, [pathname]);

  const routes = [
    { link: "/about", title: "About Me" },
    { link: "/portfolio", title: "Portfolio" },
    { link: "/contact", title: "Contact" },
    { link: "/resume", title: "Resume" },
  ];

  return (
    <div className="w-screen flex justify-center">
      <div className="flex w-4/5 p-5 items-center justify-between border-2 border-black bg-transparent text-black gap-5">
        <div className="text-2xl">Maverick Wolfe</div>
        <div className="flex gap-4">
          {routes.map((r) => (
            <Link to={r.link} className={pathname.includes(r.link) ? "underline underline-offset-2" : "hover:underline underline-offset-2"}>
              {r.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
