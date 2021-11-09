import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
const Search = () => {
  return (
    <>
      <InputGroup>
        <FormControl type="text" placeholder="search..." />
        <Button>search</Button>
      </InputGroup>
    </>
  );
};

export default Search;
