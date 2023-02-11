import React from "react";
import '../styles/Navbar.css';

const styles = {
  navTab: {
    justifyContent: 'center',
  },
};

function Navigation(props) {
  const tabs = ["About", "Portfolio", "Contact", "Resume"];
  return (
    <div  className="navbar">
      <ul style={styles.navTab} className="nav nav-tabs">
        {tabs.map((tab) => (
          <li
            className={
              props.currentPage === tab ? "nav-item is-active" : "nav-item"
            }
            key={tab}
          >
            <a
              href={"#" + tab.toLowerCase()}
              // Whenever a tab is clicked on,
              // the current page is set through the handlePageChange props.
              onClick={() => props.handlePageChange(tab)}
              className={
                props.currentPage === tab ? "nav-link active" : "nav-link"
              }
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navigation;