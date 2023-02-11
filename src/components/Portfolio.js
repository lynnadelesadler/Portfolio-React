import React from "react";
import Projects from "./Project";


const Portfolio = (singleProject) => {
const projectList  = [
  {
    id: 0,
    title: "The Venue",
    technologies: "Spotify API, Node.js, MySQL, Sequelize,Express, Handlebars and SASS",
    image: "./Images/the-venue.jpg",
    description: "The Venue' is a music blog website created to discover, save, share, and socialize about music.",
    github: "https://github.com/ScottsC0de/the-venue",
    deployedLink: " https://the-venue.herokuapp.com/",
  },
  {
    id: 1,
    title: "Covid Tracker",
    technologies: "COVID19 API, Reddit API, jQuery, Bootstrap and Moment.js",
    image: "/Images/world-map-banner.jpg",
    description: "Allows you to edit and post blogs. You can also leave comments on your own blog or the blogs of others.",
    github: "https://eaponte24.github.io/Covid-Tracker/",
    deployedLink: "https://github.com/Eaponte24/Covid-Tracker",
  },
  {
    id: 2,
    title: "Sadlers Blog Space",
    technologies: "Node.js, MySQL, Sequelize,Express and Handlebars",
    image: "./Images/blog-space.jpg",
    description: "Allows instructors to quickly create quizzes and print the quiz to a PDF to distribute to their students, as well as keep a copy for themselves with the answer key!",
    deployedLink: "https://sadlers-blog-space.herokuapp.com",
    github: "https://github.com/lynnadelesadler/Sadlers-Blog-Space",
  },
  {
    id: 3,
    title: "Sadlers NoSQL Social Network",
    technologies: "MongoDB, Mongoose ODM, Node.js and Express",
    image: "./Images/noSQL-socialnetwork.jpg",
    description: "Sadlers NoSQL Social Network API is a social network web application where users can share their thoughts, react to friends thoughts, and create a friend list.",
    github: "https://github.com/lynnadelesadler/Sadlers-NoSQL-Social-Network-API",
    deployedLink: "https://drive.google.com/file/d/1JO6cbB2dACl3d2dF-HneWFjpjThOTEJM/view",
  },
  {
    id: 4,
    title: "Sadlers Note taker",
    technologies: "Node.js and Express.js",
    image: "./Images/note-taker.jpg",
    description: "Sadler's Note Taker application can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.",
    github: "https://github.com/lynnadelesadler/Sadlers-Note-Taker",
    deployedLink: "https://sadlers-note-taker.herokuapp.com/",
  },
  {
    id: 5,
    title: "Whats Up Weather",
    technologies: "OpenWeather API and Moment.js",
    image: "./Images/weather-dashboard.jpg",
    description: "This App uses a third party API from Open Weather to request weather data from cities searched. Users will be able to search for a city and see the current weather in addition to the five day forecast. A users search history is saved in local storage and added to a search history list as a button which can render the search data for that city.",
    github: "https://github.com/lynnadelesadler/Whats-Up-Weather",
    deployedLink: "https://sadlers-note-taker.herokuapp.com/",
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

export default Portfolio;