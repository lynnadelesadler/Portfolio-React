import React from "react";
import Projects from "./Project";
import thevenue from '../images/the-venue.jpg';
import blogspace from '../images/blog-space.jpg';


const MVCPortfolio = (singleProject) => {
const projectList  = [
  {
    id: 0,
    title: "The Venue",
    technologies: "Spotify API, Node.js, MySQL, Sequelize,Express, Handlebars and SASS",
    image: thevenue,
    description: "The Venue' is a music blog website created to discover, save, share, and socialize about music.",
    github: "https://github.com/ScottsC0de/the-venue",
    deployedLink: " https://the-venue.herokuapp.com/",
  },
  {
    id: 1,
    title: "Sadlers Blog Space",
    technologies: "Node.js, MySQL, Sequelize,Express and Handlebars",
    image: blogspace,
    description: "Allows instructors to quickly create quizzes and print the quiz to a PDF to distribute to their students, as well as keep a copy for themselves with the answer key!",
    deployedLink: "https://sadlers-blog-space.herokuapp.com",
    github: "https://github.com/lynnadelesadler/Sadlers-Blog-Space",
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

export default MVCPortfolio;