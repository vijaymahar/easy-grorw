import React, { useState, useEffect } from "react";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";
const Search = ({ getSearch }) => {
  const [search, setSearch] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    getSearch(search);
    // console.log(search);
  };
  return (
    <>
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
    </>
  );
};

export default Search;
