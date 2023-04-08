import React from "react";
import { host_URL } from "../store/host";

export function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            OnlineShop
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ "--bs-scroll-height": "100px" }}
            >
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="./">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/product">
                  Products
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {window.location.href === host_URL + "/product/men" ? (
                    <>Men </>
                  ) : window.location.href === host_URL + "/product/women" ? (
                    <>women</>
                  ) : window.location.href ===
                    host_URL + "/product/featured" ? (
                    <>featured</>
                  ) : window.location.href === host_URL + "/product/kids" ? (
                    <>Kids</>
                  ) : (
                    <>Filter store {}</>
                  )}
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href={host_URL + "/product/women"}
                    >
                      women's
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href={host_URL + "/product/men"}
                    >
                      men's
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href={host_URL + "/product/kids"}
                    >
                      Kid's
                    </a>
                  </li>
                  <li className="dropdown-divider"></li>
                  <li>
                    <a
                      className="dropdown-item"
                      href={host_URL + "/product/featured"}
                    >
                      other
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/aboutus">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/give_feedback">
                  Give us feedback
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
export function HomePage() {
  return <div className="container-bg p-12"></div>;
}
