import React from "react";
import Projects from "./Project"


const MVCPortfolio = (singleProject) => {
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
    title: "Sadlers Blog Space",
    technologies: "Node.js, MySQL, Sequelize,Express and Handlebars",
    image: "./Images/blog-space.jpg",
    description: "Allows instructors to quickly create quizzes and print the quiz to a PDF to distribute to their students, as well as keep a copy for themselves with the answer key!",
    deployedLink: "https://sadlers-blog-space.herokuapp.com",
    github: "https://github.com/lynnadelesadler/Sadlers-Blog-Space",
  },
  {
  id: 2,
  title: "Inspiration Generator",
  technologies: "MERN Stack - React,GraphQL, Node.js,  Express.js, MongoDB, Mongoose ODM ",
  image: "./Images/inspirations.jpg",
  description: "This App uses a third party API from Flickr to request images. Users will be able to search and see list of images tagged with that search id. Images can be saved to their DB and they can review, like and comment on other users and images.",
  github: "https://github.com/ScottsC0de/proj-3",
  deployedLink: "https://af-ls-mj-sg-dp-proj-3.herokuapp.com/",
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