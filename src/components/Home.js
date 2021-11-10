import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../assets/Home.css";
import "../assets/Card.css";
import { Link } from "react-router-dom";
const Home = ({ data }) => {
  return (
    <Row>
      {Object.entries(data).length > 0 &&
        data.hits.map((item, index) => {
          return (
            <Col md={4} key={index}>
              <Card id="card">
                <div id="card_img_capsul">
                  <Card.Img
                    variant="top"
                    src={item.recipe.image}
                    alt={item.recipe.Title}
                    className="img-fluid"
                  />
                </div>
                <Card.Body className="text-center" id="card_body">
                  <p id="card_title">{item.recipe.label}</p>
                  <Link
                    variant="primary"
                    className="mx-auto"
                    id="card_button"
                    to={`/:${item.recipe.image}`}
                  >
                    view item
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
    </Row>
  );
};

export default Home;
