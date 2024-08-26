import React, { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  let [keyword, setKeyword] = useState("");
  let dispatch = useDispatch();

  const searchName = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH_NAME", payload: { keyword } });
  };
  return (
    <Form onSubmit={searchName} className="search-form">
      <Row>
        <Col lg={10}>
          <Form.Control
            type="text"
            placeholder="Name"
            onChange={(event) => setKeyword(event.target.value)}
          />
        </Col>
        <Col lg={2}>
          <Button type="submit">Search</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
