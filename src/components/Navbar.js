import { useState, useEffect } from "react";

let prevPos = window.pageYOffset;

const Navbar = () => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 10) {
      document.getElementById("navbar").style.borderBottom =
        "thin solid #5f0084";
      document.getElementById("navbar").style.background =
        "rgba(0, 0, 0, 1) 100%";
    } else if (window.pageYOffset < prevPos) {
      document.getElementById("navbar").style.borderBottom = "";
      document.getElementById("navbar").style.background =
        "rgba(0, 0, 0, 0) 0%";
    }
    prevPos = window.pageYOffset;
  };

  return (
    <nav className="navbar fixed-top" id="navbar">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src={process.env.PUBLIC_URL + "/logo.png"}
            width="35"
            height="60"
            className="d-inline-block align-top"
            alt=""
          ></img>
          <p className="d-inline-block pt-3 px-3 text-light">CryptoCrowdfund</p>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
