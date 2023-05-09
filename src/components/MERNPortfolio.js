import React from "react";
import Projects from "./Project";
import bookengine from '../images/bookengine.jpg';
import inspirations from '../images/inspirations.jpg';


const MERNPortfolio = (singleProject) => {
const projectList  = [
  {
    id: 0,
    title: "Sadler-Book-Search-Engine",
    technologies: "MERN Stack - React, GraphQL, Node.js,  Express.js, Google Books API, MongoDB, Mongoose ODM",
    image:bookengine,
    description: "This App uses the Google Books API search engine connected with a GraphQL API built with Apollo Server. The app was built using the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API. The app allow users to save book searches to the back end.",
    github: "https://github.com/lynnadelesadler/Sadler-Book-Search-Engine",
    deployedLink: "https://powerful-taiga-10980.herokuapp.com/",
  },
  {
  id: 1,
  title: "Inspiration Generator",
  technologies: "MERN Stack - React,GraphQL, Node.js,  Express.js, MongoDB, Mongoose ODM ",
  image:inspirations,
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

export default MERNPortfolio;