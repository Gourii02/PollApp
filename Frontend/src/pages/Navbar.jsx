import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm px-6 md:px-20 py-4 font-sans font-medium border-b">
      <div className="flex justify-between items-center">

        {/* Logo */}
        <h1 className="font-bold text-2xl text-gray-900 tracking-tight">
          PollApp
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-[17px] items-center text-gray-700">
          
          <Link
            to="/"
            className="hover:text-blue-600 transition"
          >
            Home
          </Link>

          <Link
            to="/create"
            className="hover:text-blue-600 transition"
          >
            Create Poll
          </Link>

          <Link
            to="/mypolls"
            className="hover:text-blue-600 transition"
          >
            My Polls
          </Link>

          {user ? (
            <>
              <span className="text-sm text-gray-500">Hi, {user.name}</span>

              <button
                onClick={logout}
                className="border border-gray-300 px-4 py-1.5 rounded-lg text-gray-700 hover:bg-gray-100 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="px-4 py-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 flex flex-col gap-4 text-gray-700 bg-gray-50 p-4 rounded-lg shadow-sm border">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="py-2 px-3 rounded-md hover:bg-gray-100 text-center transition"
          >
            Home
          </Link>

          <Link
            to="/create"
            onClick={() => setMenuOpen(false)}
            className="py-2 px-3 rounded-md hover:bg-gray-100 text-center transition"
          >
            Create Poll
          </Link>

          <Link
            to="/mypolls"
            onClick={() => setMenuOpen(false)}
            className="py-2 px-3 rounded-md hover:bg-gray-100 text-center transition"
          >
            My Polls
          </Link>

          {user ? (
            <>
              <span className="text-sm px-3 py-2 text-center text-gray-600">
                Hi, {user.name}
              </span>

              <button
                onClick={() => {
                  logout();
                  setMenuOpen(false);
                }}
                className="border border-gray-300 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white text-center hover:bg-blue-700 transition"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
