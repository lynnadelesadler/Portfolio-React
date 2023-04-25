import React from "react";
import Projects from "./Project";
import worldmapbanner from '../images/world-map-banner.jpg';
import weatherdashboard from '../images/weather-dashboard.jpg';


const ServerAPIPortfolio = (singleProject) => {
const projectList  = [
  {
    id: 0,
    title: "Covid Tracker",
    technologies: "COVID19 API, Reddit API, jQuery, Bootstrap and Moment.js",
    image: worldmapbanner,
    description: "Allows you to edit and post blogs. You can also leave comments on your own blog or the blogs of others.",
    github: "https://eaponte24.github.io/Covid-Tracker/",
    deployedLink: "https://github.com/Eaponte24/Covid-Tracker",
  },
  {
  id: 1,
  title: "Whats Up Weather",
  technologies: "OpenWeather API and Moment.js",
  image: weatherdashboard,
  description: "This App uses a third party API from Open Weather to request weather data from cities searched. Users will be able to search for a city and see the current weather in addition to the five day forecast. A users search history is saved in local storage and added to a search history list as a button which can render the search data for that city.",
  github: "https://github.com/lynnadelesadler/Whats-Up-Weather",
  deployedLink: "https://lynnadelesadler.github.io/Whats-Up-Weather/",
},
];

return (
  <div key={singleProject.title}>
    <div className="flex-row">
        {projectList.map((singleProject) => (
          <Projects singleProject={singleProject}/>
      ))}
    </div>
  </div>
);
};

export default ServerAPIPortfolio;