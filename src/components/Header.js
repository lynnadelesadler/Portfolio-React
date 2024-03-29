import React, { useState } from "react";
import "../styles/Header.css";
import NavBar from "./Navbar";
import About from "./About";
import Contact from "./Contact";
import Resume from "./Resume";
import MainPortfolio from "./MainPortfolio";

const styles = {
  header: {
    backgroundColor: "#84a8bd",
  },
};

function Header() {
  const [currentPage, handlePageChange] = useState("About");

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <MainPortfolio />;
      case "Resume":
        return <Resume />;
      case "Contact":
         return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <nav style={styles.header} className="navbar">
        <div className="navbar-brand">
          <a
            className="navbar-item"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/lynnadelesadler"
          >
            <h1>
              Lynn<span class="seo"> Sadler</span>
            </h1>
          </a>
        </div>
      </nav>
      {/* Pass the state value and the setter as props to NavTabs */}
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Call the renderPage function passing in the currentPage */}
      <main>
        <div>{renderPage(currentPage)}</div>
      </main>
    </div>
  );
}

export default Header;
