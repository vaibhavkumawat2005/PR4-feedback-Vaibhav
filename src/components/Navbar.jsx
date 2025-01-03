import React from "react";
import style from "./Navbar.module.css"; // Make sure you add styles in the CSS file

function Navbar() {
  return (
    <>
      <div className="d-flex justify-content-around header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100 justify-content-around">
          <a
            className="navbar-brand w-25 text-danger d-flex align-items-center"
            href="#"
          >
            <div className={style.marvelLogo}>
              <span>Marvel Universe</span>
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-around"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-5 ms-5 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-warning"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-warning" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-warning" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-warning" href="#">
                  Movies
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-warning"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Movies
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Stream
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Events
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Plays
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sports
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Activities
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-danger" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
