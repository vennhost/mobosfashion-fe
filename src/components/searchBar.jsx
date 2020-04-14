import React from "react";
import { Container, Button } from "reactstrap";

class SearchBar extends React.Component {
  state = {};
  render() {
    return (
      <div className="search pt-3">
        <Container>
          <input
            className="searchBox"
            type="text"
            placeholder="...search for products"
          />{" "}
          <Button className="btn searchBtn">Go</Button>
        </Container>
      </div>
    );
  }
}

export default SearchBar;
