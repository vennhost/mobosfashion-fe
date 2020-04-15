import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import product from '../img/products/top.jpg'
import Tag from "./TagBadge";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Car = (props) => {
  return (
    <>
    <Tag className="tag"/>
    <Carousel className='featuredProduct' responsive={responsive}>
      
      <div>{<img src={product} alt="Featured Products" width="50%" />}</div>
      <div>{<img src={product} alt="Featured Products" width="50%" />}</div>
      <div>{<img src={product} alt="Featured Products" width="50%" />}</div>
      <div>{<img src={product} alt="Featured Products" width="50%" />}</div>
      <div>{<img src={product} alt="Featured Products" width="50%" />}</div>
    </Carousel>
    </>
  );
};

export default Car;
