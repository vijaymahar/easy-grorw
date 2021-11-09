import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import Search from "./components/Search";
import Home from "./components/Home";
const App = () => {
  const id = "e3a71cea";
  const key = "a3c7c9befc4e76ebd394f2e46f924b5c";
  const api = `https://api.edamam.com/search?q=chicken&app_id=${id}&app_key=${key}`;
  const fetchData = async () => {
    const result = await axios(api);
    console.log(result.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <center>
        <h1>easy grow</h1>
      </center>
      <Container className="container mt-5">
        <Row className="row ">
          <Col md={6} className="mx-auto">
            <Search />
          </Col>
        </Row>
        <Row className=" mt-3">
          <Home />
        </Row>
      </Container>
    </div>
  );
};

export default App;
