import React from "react";
import Projects from "./Project";
import scheduler from '../images/scheduler.jpeg';


const ThirdPartyAPIPortfolio = (singleProject) => {
const projectList  = [
  {
    id: 0,
    title: "Sadler Scheduling Solutions",
    technologies: "jQuery and Moment.js)",
    image: scheduler,
    description: "",
    github: "https://lynnadelesadler.github.io/Sadler-Scheduling-Solutions/",
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

export default ThirdPartyAPIPortfolio;