import React from "react";

import "react-awesome-slider/dist/custom-animations/cube-animation.css";

import Slider from "../components/Slider";
import { Col, Row, Container, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from "reactstrap";
import productImg from "../img/products/top.jpg"
import SearchBar from "../components/searchBar";
import Car from "../components/Carousel";
import Right from "../components/RightBar";

class Home extends React.Component {
  state = {
    products: [
      {
        id: 35,
        name: "jumper",
        description: "this item is the best in town",
        color: "red",
        price: 20,
      },
      {
        id: 42,
        name: "shirt",
        description: "this item is the best in town",
        color: "blue",
        price: 15,
      },
      {
        id: 56,
        name: "pants",
        description: "this item is the best in town",
        color: "green",
        price: 25,
      },
      {
        id: 71,
        name: "socks",
        description: "this item is the best in town",
        color: "black",
        price: 5,
      },
      {
        id: 72,
        name: "socks",
        description: "this item is the best in town",
        color: "white",
        price: 5,
      },
    ]
  };
  render() {
    return (
      <>
       
         <SearchBar/>
       
        <Row className='header'>
          <Col xs="3">.col-3</Col>
          <Col xs="6">
              <Slider/>
              <Car/>
              </Col>
          <Col xs="3"><Right /></Col>
        </Row>
        

        <Container>
            <Row>
          
            {this.state.products.map((product, index) => (
                <div className="col-3 sm-6 pt-5">
                  <Card className="productCard">
                    <CardImg top width="20px" src={productImg} alt="Product Img" />
                    <CardBody>
                      <CardTitle> {product.name.toUpperCase()} </CardTitle>
                      <CardSubtitle>
                        $ {product.price}
                      </CardSubtitle>
                      <CardText> {product.description} </CardText>
                      <Button>Add to Cart</Button>
                    </CardBody>
                  </Card>
                </div>
              ))}
          
          </Row>
        </Container>
      </>
    );
  }
}

export default Home;
