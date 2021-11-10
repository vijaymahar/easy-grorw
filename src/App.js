import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "axios";
import Search from "./components/Search";
import Home from "./components/Home";
import Sidebar from "./pages/Sidebar";
import HistoryPage from "./pages/HistoryPage";
import Error from "./pages/Error";
import Allergies from "./pages/Allergies";
import Diets from "./pages/Diets";
import Nutrients from "./pages/Nutrients";
import Overview from "./pages/Overview";
import "./assets/Search.css";
const App = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
  const navigate = useNavigate();
  const newData = useSelector(
    (state) => state.RemoveSearchTerm.updatedSearches
  );

  const id = "e3a71cea";
  const key = "a3c7c9befc4e76ebd394f2e46f924b5c";
  const api = `https://api.edamam.com/search?q=${search}&app_id=${id}&app_key=${key}`;
  const fetchData = async () => {
    if (search !== "") {
      const result = await axios.get(api);
      setResults(result.data);
      // setSearchHistory([...searchHistory, search]);
      setSearchHistory([...searchHistory, { id: Date.now(), search: search }]);
    } else {
      alert("Please enter a valid search");
    }
    console.log(results.hits);
  };
  const getSearch = (e) => {
    setSearch(e);
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  const updateSearch = () => {
    if (newData) {
      setSearchHistory([...newData]);
    }
  };
  useEffect(() => {
    updateSearch();
    console.log("store data:", newData);
  }, [newData]);
  return (
    <>
      <center>
        <h1>easy grow</h1>
      </center>
      <Search getSearch={getSearch} />
      <Container>
        <Row id="home_container">
          <Col md={3} id="links_page">
            <Sidebar />
          </Col>
          <Col md={6} id="main_page">
            <Container className="mt-4">
              <Routes>
                <Route path="/" exact element={<Home data={results} />} />
                {results.hits && <Route path="/error" element={<Error />} />}
                <Route path="allergies" element={<Allergies />} />
                <Route path="diets" element={<Diets />} />
                <Route path="nutrients" element={<Nutrients />} />
                <Route path="/overview" exact element={<Overview />} />
              </Routes>
            </Container>
          </Col>
          <Col md={3} id="search_page">
            <HistoryPage searchHistory={searchHistory} search={search} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
