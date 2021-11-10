import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import Search from "./components/Search";
import Home from "./components/Home";
import Sidebar from "./pages/Sidebar";
import HistoryPage from "./pages/HistoryPage";
const App = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
  const id = "e3a71cea";
  const key = "a3c7c9befc4e76ebd394f2e46f924b5c";
  const api = `https://api.edamam.com/search?q=${search}&app_id=${id}&app_key=${key}`;
  const fetchData = async () => {
    if (search != "") {
      const result = await axios.get(api);
      setResults(result.data);
      // setSearchHistory([...searchHistory, search]);
      setSearchHistory([...searchHistory, { id: Date.now(), search: search }]);
    } else {
      alert("Please enter a valid search");
    }
    // console.log(result.data);
  };
  // console.log("from app component: ", search);
  const getSearch = (e) => {
    setSearch(e);
  };
  useEffect(() => {
    fetchData();
  }, [search]);

  return (
    <div>
      <center>
        <h1>easy grow</h1>
      </center>
      <Container className="container mt-5">
        <Row className="row ">
          <Col md={6} className="mx-auto">
            <Search getSearch={getSearch} />
          </Col>
        </Row>
        <Row className=" mt-3">
          <Container>
            <Row id="home_container" className="">
              <Col md={3} id="links_page">
                <Sidebar />
              </Col>
              <Col md={6} id="main_page">
                <Container className="mt-4">
                  <Home data={results} />
                </Container>
              </Col>
              <Col md={3} id="search_page">
                <HistoryPage searchHistory={searchHistory} search={search} />
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    </div>
  );
};

export default App;
