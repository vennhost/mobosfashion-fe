import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import product from "../img/products/top.jpg";

import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const ProductCard = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={product} alt="Product Img" />
        <CardBody>
          <CardTitle> {this.props.product.name} </CardTitle>
          <CardSubtitle>Price: $ {this.props.product.price} <a href="mobos.com"><WhatsAppIcon /></a></CardSubtitle>
          <CardText> {this.props.product.description} </CardText>
          <Button>Add to Cart</Button> 
          
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductCard;