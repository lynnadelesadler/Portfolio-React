import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>My Full Stack Development Portfolio</strong> - a React site by{" "}
          <a href="https://github.com/lynnadelesadler" target="_blank" rel="noreferrer">
            Lynn Sadler
          </a>
          .
          <hr />
           <i class="fa-brands fa-linkedin"></i> <a href="https://www.linkedin.com/in/lynn-sadler-07ab16144"
            target="_blank" rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}{" "}
          <i class="fa-regular fa-envelope"></i> <a href="#">lynnadelesadler@yahoo.com
            </a>
          {" "}
          |{" "}{" "}
          <i class="fa-brands fa-github"></i> <a href="https://github.com/lynnadelesadler" target="_blank" rel="noreferrer">
            Github
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
