import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <i class="bi bi-file-text-fill" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse align-items-center justify-content-end"
          id="navbarSupportedContent"
        >
          <form class="d-flex align-items-center justify-content-between">
            <button type="button" class="btn btn-light me-3">
              Login
            </button>
            <button class="btn btn-outline-success" type="submit">
              Signup
            </button>
            {/* <button class="btn btn-outline-success me-4" type="submit">
              Logout
            </button> */}
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
