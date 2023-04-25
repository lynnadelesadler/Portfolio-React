import React from "react";
import Projects from "./Project";
import homepage from '../images/homepage.jpeg';


const WebAPI = (singleProject) => {
const projectList  = [
  {
    id: 0,
    title: "Code Quiz",
    technologies: "jQuery and Moment.js)",
    image: homepage,
    description: "",
    github: "https://lynnadelesadler.github.io/Code-Quiz/",
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

export default WebAPI;