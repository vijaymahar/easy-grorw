import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/Home.css";
import Sidebar from "../pages/Sidebar";
const Home = () => {
  return (
    <div>
      <Container>
        <Row id="home_container" className="">
          <Col md={3} id="links_page">
            <Sidebar />
          </Col>
          <Col md={6} id="main_page"></Col>
          <Col md={3} id="search_page"></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
