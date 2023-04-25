import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import MVCPortfolio from './MVCPortfolio';
import MERNPortfolio from './MERNPortfolio';
import ServerAPIPortfolio from './ServerAPI';
import NoSQLPortfolio from './NoSQLPortfolio';
import ThirdPartyAPIPortfolio from './ThirdPartyAPI';
import SQLPortfolio from './SQLPortfolio';
import Javascript from './Javascript';
import WebAPI from "./WebAPI";
import Nodejs from "./Nodejs";

function MainPortfolio() {
  return (
    <section>
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>MERN</Accordion.Header>
        <Accordion.Body>
        <Accordion defaultActiveKey="0" flush>
     <MERNPortfolio/>
    </Accordion>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>MVC</Accordion.Header>
        <Accordion.Body>
        <MVCPortfolio/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>SQL</Accordion.Header>
        <Accordion.Body>
         <SQLPortfolio/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>NoSQL</Accordion.Header>
        <Accordion.Body>
       <NoSQLPortfolio/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Server-Side API</Accordion.Header>
        <Accordion.Body>
          <ServerAPIPortfolio/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Third Party API</Accordion.Header>
        <Accordion.Body>
          <ThirdPartyAPIPortfolio/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Web API</Accordion.Header>
        <Accordion.Body>
         <WebAPI/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>Node.js</Accordion.Header>
        <Accordion.Body>
          <Nodejs/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header>Javascript</Accordion.Header>
        <Accordion.Body>
        <Javascript/>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </section>
  );
}

export default MainPortfolio;

