import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css";

function Layout() {
  return (
    <div className="layout">
      <span className="layout-link">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          Home
        </Link>
      </span>
      <span className="layout-link">
        <Link to="/search" style={{ textDecoration: "none", color: "white" }}>
          search
        </Link>
      </span>
    </div>
  );
}

export default Layout;
