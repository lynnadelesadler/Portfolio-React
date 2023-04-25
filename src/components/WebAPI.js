import React from "react";
import Projects from "./Project"


const WebAPI = (singleProject) => {
const projectList  = [
  {
    id: 0,
    title: "Code Quiz",
    technologies: "jQuery and Moment.js)",
    image: "",
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