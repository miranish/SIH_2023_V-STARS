import React from "react";
import "../styles/NavbarTop.css";
function NavbarTop() {
  return (
    <nav
      class="navbar navbar-toggleable-md fixed-top navbar-transparent"
      color-on-scroll="500"
    >
      <div class="container">
        <div class="navbar-translate">
          <button
            class="navbar-toggler navbar-toggler-right navbar-burger"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggler"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-bar"></span>
            <span class="navbar-toggler-bar"></span>
            <span class="navbar-toggler-bar"></span>
          </button>
          <a class="navbar-brand" href="https://www.example.com">
            Bharat
          </a>
        </div>
        <div class="collapse navbar-collapse" id="navbarToggler">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item"
            onClick={() => window.location.href = "/india"}
            >
              <a
                class="nav-link"
                rel="tooltip"
                title="Explore India"
                data-placement="bottom"
              >
                {/* <i class="fa fa-twitter"></i> */}
                <p class="">Explore Map</p>
              </a>
            </li>
            {/* <li class="nav-item">
              <a
                class="nav-link"
                rel="tooltip"
                title="Like us on Facebook"
                data-placement="bottom"
                href="https://www.facebook.com/"
                target="_blank"
              >
                <i class="fa fa-facebook-square"></i>
                <p class="hidden-lg-up">Facebook</p>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                rel="tooltip"
                title="Follow us on Instagram"
                data-placement="bottom"
                href="https://www.instagram.com/"
                target="_blank"
              >
                <i class="fa fa-instagram"></i>
                <p class="hidden-lg-up">Instagram</p>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                rel="tooltip"
                title="Star on GitHub"
                data-placement="bottom"
                href="https://www.github.com/"
                target="_blank"
              >
                <i class="fa fa-github"></i>
                <p class="hidden-lg-up">GitHub</p>
              </a>
            </li> */}
            {/* <li class="nav-item">
              <a
                href="https://www.example.com"
                target="_blank"
                class="btn btn-danger btn-round"
              >
                Login
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarTop;