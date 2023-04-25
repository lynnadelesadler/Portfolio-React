import React from "react";
import Projects from "./Project"


const SQLPortfolio = (singleProject) => {
const projectList  = [
  {
    id: 0,
    title: "Sadlers E-Commerce Back End",
    technologies: "Node.js, MySQL, Express and Sequelize",
    image: "",
    description: "Sadlers NoSQL Social Network API is a social network web application where users can share their thoughts, react to friends thoughts, and create a friend list.",
    github: "https://github.com/lynnadelesadler/Sadler-s-Professional-README-Generator",
    deployedLink: "",
  },
  {
    id: 1,
    title: "Employee Tracker",
    technologies: "Node.js, Inquirer and MySQL",
    image: "",
    description: "",
    github: "https://github.com/lynnadelesadler/Sadlers-Employee-Tracker",
    deployedLink: "",
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

export default SQLPortfolio;