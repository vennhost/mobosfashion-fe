import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
/* import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'; */

import { ShoppingCart } from "@material-ui/icons";

const Cart = (props) => {
  const {
    
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}><ShoppingCart/></Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Shopping Cart</ModalHeader>
        <ModalBody>
          1. Product 1 <br/>
          2. Product 2
            <hr/>
          Total:
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Checkout</Button>{' '}
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Cart;