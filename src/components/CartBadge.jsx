import React from 'react';
import { Badge } from 'reactstrap';

const CartCount = (props) => {
  return (
    <div>
     
      <Badge className='count' color="warning" pill>2</Badge>
      
    </div>
  );
}

export default CartCount;