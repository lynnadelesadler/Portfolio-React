import React from "react";
import Projects from "./Project"


const NoSQLPortfolio = (singleProject) => {
const projectList  = [
  {
    id: 0,
    title: "Sadlers NoSQL Social Network",
    technologies: "MongoDB, Mongoose ODM, Node.js and Express",
    image: "./Images/noSQL-socialnetwork.jpg",
    description: "Sadlers NoSQL Social Network API is a social network web application where users can share their thoughts, react to friends thoughts, and create a friend list.",
    github: "https://github.com/lynnadelesadler/Sadlers-NoSQL-Social-Network-API",
    deployedLink: "https://drive.google.com/file/d/1JO6cbB2dACl3d2dF-HneWFjpjThOTEJM/view",
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

export default NoSQLPortfolio;