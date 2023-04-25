import React from "react";
import Projects from "./Project";
import npmRunStart from '../images/npmRunStart.JPG';
import employeetracker from '../images/employeetracker.jpeg';


const SQLPortfolio = (singleProject) => {
const projectList  = [
  {
    id: 0,
    title: "Sadlers E-Commerce Back End",
    technologies: "Node.js, MySQL, Express and Sequelize",
    image: npmRunStart,
    description: "Sadlers NoSQL Social Network API is a social network web application where users can share their thoughts, react to friends thoughts, and create a friend list.",
    github: "https://github.com/lynnadelesadler/Sadler-s-Professional-README-Generator",
    deployedLink: "",
  },
  {
    id: 1,
    title: "Employee Tracker",
    technologies: "Node.js, Inquirer and MySQL",
    image: employeetracker,
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