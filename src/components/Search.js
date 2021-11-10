import React, { useState, useEffect } from "react";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
const Search = ({ getSearch }) => {
  const [search, setSearch] = useState("");
  const term = useSelector((state) => state.AddSearchTerm.newTerm);
  const submitHandler = (e) => {
    e.preventDefault();
    getSearch(search);
    setSearch("");
    // console.log(search);
  };

  const AddTerm = () => {
    if (term) {
      setSearch(term);
    }
  };
  useEffect(() => {
    AddTerm();
  }, [term]);
  return (
    <div id="search_comp">
      <Form onSubmit={submitHandler}>
        <InputGroup>
          <FormControl
            type="search"
            placeholder="search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button type="submit">search</Button>
        </InputGroup>
      </Form>
    </div>
  );
};

export default Search;
