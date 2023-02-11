import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';


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
              src="./Images/redrocks.jpg"
              alt="redrocks"
            />

          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100" data-bs-interval="20000"
              src="./Images/sailboat.jpg"
              alt="sailboat"
            />
          </Carousel.Item>
        </Carousel>
      </div>
<div>
      <p className="content" class="space" style={styles.About}>
        <h5>Education</h5>
        I am currently embarking on my journey as a full stack web developer through an accelerated 6 month bootcamp
        program at UConn. My curiosity to dissect the user-facing systems tied to the back end of the
        application has driven me to obtain my skills in the Cross-discipline of Full Stack Development.
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