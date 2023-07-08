import React from "react";

export const Navbar = ({ showHome, setShowHome }) => {
  return (
    <div>
      <nav className="fixed-nav-bar">
        <button
          className={`links ${showHome && " linkselected"}`}
          onClick={() => setShowHome(!showHome)}
        >
          Home
        </button>
        <button
          className={`links ${!showHome && " linkselected"}`}
          onClick={() => setShowHome(!showHome)}
        >
          Favorites
        </button>
      </nav>
    </div>
  );
};
