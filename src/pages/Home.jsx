import React from "react";

import "react-awesome-slider/dist/custom-animations/cube-animation.css";

import Slider from "../components/Slider";
import { Col, Row, Container, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Spinner } from "reactstrap";
import productImg from "../img/products/top.jpg"
import SearchBar from "../components/searchBar";
import Car from "../components/Carousel";
import Right from "../components/RightBar";
import LeftBar from "../components/SideBar";
import logo from "../img/admin/logo.png";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import CartCount from '../components/CartBadge';
import { ShoppingCart } from "@material-ui/icons";
import Cart from '../components/ShoppingCart'

class Home extends React.Component {
  state = {
    /* products: [
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
    ] */

    products: [],
    isLoading: true
  };
  render() {

    const handleBuy = () => {
      alert('Added to Cart')
    }
    
    
    return (
      <>
       
       <Row className="logoContainer">
        <Col md="3"><img id="logo" src={logo} alt="Logo" width="150px" /></Col>
        <Col md="6"><SearchBar/></Col>
        <Col md="3"><p className="cartSpace ml-5"><span className="cartIcon"><Cart/></span><span className="cartCount"><CartCount/></span></p></Col>
      </Row>
         
       
        <Row className='header'>
          <Col md="3"> <LeftBar/> </Col>
          <Col md="6">
              <Slider/>
              <Car/>
              </Col>
          <Col md="3"><Right /></Col>
        </Row>
        
        {/* if (this.state.isLoading) return <Spinner color="warning" className="center" /> */}

        <Container>
            <Row>
            
            { this.state.products.map((product, index) => (
                <Col xs="6" sm="3" className="pt-5">
                  <Card key={index} className="productCard">
                    <CardImg top width="20px" src={productImg} alt="Product Img" />
                    <CardBody>
                      <CardTitle> {product.productName.toUpperCase()} </CardTitle>
                      <CardSubtitle>
                        NGN {product.price}
                      </CardSubtitle>
                      <CardText> {product.description} </CardText>
                      <Button className="cartButton" onClick={handleBuy}>Add to Cart</Button>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            
          </Row>
        </Container>
      </>
    );
  }

    componentDidMount = async () => {
      const resp = await fetch('http://localhost:3000/products')
      const products = await resp.json()
        console.log(products)
      this.setState({
        products: products,
        isLoading: false
      })
    }

}

export default Home;
