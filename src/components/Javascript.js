import React from "react";
import Projects from "./Project"


const Javascript = (singleProject) => {
const projectList  = [
  {
    id: 0,
    title: "Password Generator",
    technologies: "jQuery and Moment.js)",
    image: "",
    description: "",
    github: "https://lynnadelesadler.github.io/Password-Generator/",
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

export default Javascript;