import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import redrocks from '../images/redrocks.jpg';
import sailboat from '../images/sailboat.jpg';
import skiing2 from '../images/skiing2.jpg';


const styles = {
  About: {
    margin: 20,
    background: 'aliceblue',
  },
};


function About() {
  return (
    <section>
      <div style={{ display: 'inline-block', width: 400, }}>
        <Carousel>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100" data-bs-interval="10000"
              src={redrocks}
              alt="redrocks"
            />

          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100" data-bs-interval="20000"
              src={sailboat}
              alt="sailboat"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100" data-bs-interval="20000"
              src={skiing2}
              alt="skiing"
            />
          </Carousel.Item>
        </Carousel>
      </div>
<div>
      <p className="content" class="space" style={styles.About}>
        <h5>Education</h5>
        Graduating from a 24-week rigorous full stack coding bootcamp through the University of Connecticut 
        Department of Engineering, I obtained skills such as Node.JS, JavaScript and React. With the Agile
        methodology, I collaborated with other developers to conceive and execute designs that solve real-world problems.
        Using my strong analytical skills, diligence and creative thinking, I am a driven to deliver
        solutions for aesthetically pleasing UI tied to clean code of the back frame.
        <br></br><br></br>Bachelor of Science Business Administration <br></br>
        Minor in Business Information Systems <br></br>
        Eastern Connecticut State University</p>
      <p className="content" class="space" style={styles.About}>
        <h5>Career</h5>
        I have spent 13 passionate years in HealthCare IT supporting the Patient Electronic
        Health Record. Throughout my career I've built custom features for end user layout and interactions
        linked to back-end triggers resulting in outcomes to enhance patient care workflow and hospital
        throughput metrics. It's been extremely rewarding to focus my skills on projects optimizing the EHR
        for all clinical roles that impact HealthCare outcomes.
      </p>
      <p className="content" class="space" style={styles.About}>
        <h5>Hobbies</h5>
        My hobbies include hiking, sailing and skiing. There are many beautiful places to hike where I live in
        New England; but in the picture above I set out to hike the Red Rocks in Colorado which
        was one of my favorite hikes to date! When the warm weather strikes I enjoy taking day sails around
        Fisher's Island Sound. I have also embarked on many longer journeys over to Block Island, Martha's Vineyard
        and Nantucket. In the Winter I love hitting the slopes with my Family. I opt for the slower pace down the Mountain;
        enjoying the scenery and not rushing towards the finish line.
      </p>
      <p className="content" class="space-italic"> My hobbies embody my Motto - "Enjoy the journey". It's not always about the
        destination but the journey you took to get there!</p>
        </div>
    </section>
  );
}

export default About;