import React from "react";
import Projects from "./Project"
import notetaker from '../images/note-taker.jpg';
import DreamTeam from '../images/DreamTeam.PNG';
import readme from '../images/app-questions.PNG';


const Nodejs = (singleProject) => {
const projectList  = [
  {
    id: 0,
    title: "Professional README Generator",
    technologies: "Node.js and Inquirer.js",
    image: readme,
    description: "Sadlers NoSQL Social Network API is a social network web application where users can share their thoughts, react to friends thoughts, and create a friend list.",
    github: "https://github.com/lynnadelesadler/Sadler-s-Professional-README-Generator",
    deployedLink: "",
  },
  {
    id: 1,
    title: "Dream Team Generator",
    technologies: "Node.js, Inquirer.js and Jest.js",
    image: DreamTeam,
    description: "",
    github: "https://github.com/lynnadelesadler/Dream-Team-Profile-Generator",
    deployedLink: "",
  },
  {
    id: 2,
    title: "Note Taker",
    technologies: "Node.js and Express.js",
    image: notetaker,
    description: "",
    github: "https://github.com/lynnadelesadler/Sadlers-Note-Taker",
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

export default Nodejs;