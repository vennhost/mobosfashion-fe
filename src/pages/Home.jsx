import React from "react";

import "react-awesome-slider/dist/custom-animations/cube-animation.css";

import Slider from "../components/Slider";
import { Col, Row, Container, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from "reactstrap";
import productImg from "../img/products/top.jpg"
import SearchBar from "../components/searchBar";
import Car from "../components/Carousel";
import Right from "../components/RightBar";
import LeftBar from "../components/SideBar";
import logo from "../img/admin/logo.png";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import CartCount from '../components/CartBadge';

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
       
       <Row>
        <Col xs="3"><img id="logo" src={logo} alt="Logo" width="150px" /></Col>
        <Col xs="6"><SearchBar/></Col>
        <Col xs="3"><p className="cartSpace"><span className="cartIcon"><AddShoppingCartIcon/></span><span className="cartCount"><CartCount/></span></p></Col>
      </Row>
         
       
        <Row className='header'>
          <Col xs="3"> <LeftBar/> </Col>
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
