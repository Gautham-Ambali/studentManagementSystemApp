import React from "react";
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav
      style={{
        position: "fixed",
        left: "0",
        top: "0",
        width: "100%",
        padding: "25px 9%",
        zIndex: "100",
        marginBottom:"280px",
        background: "#1f242d"
      }}
    >
      <Link to={"/"} className="logo">
        MentorX.
      </Link>
    </nav>
  );
}

export default Header;
