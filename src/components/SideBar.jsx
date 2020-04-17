import React, { useState } from 'react';
import { Collapse, Nav, NavItem, NavLink, NavbarToggler } from 'reactstrap';
import { Dehaze } from '@material-ui/icons';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import PregnantWomanIcon from '@material-ui/icons/PregnantWoman';

const LeftBar = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="sideLink">
      
      <p className="categoryList"><span className="listIcon"><FormatListBulletedIcon onClick={toggle} /></span><span>Categories</span></p>
      
      <Nav vertical>
      
      <Collapse isOpen={isOpen} navbar>
        <NavItem className="nav" >
          <NavLink href="#"><PregnantWomanIcon/><span>Women Shoes</span></NavLink>
        </NavItem>
        <NavItem className="nav" >
          <NavLink href="#"><LocalMallIcon/><span className="linkName">Women Bags</span></NavLink>
        </NavItem>
        <NavItem className="nav" >
          <NavLink href="#"><AccessibilityIcon/><span className="linkName">Men Shoes</span></NavLink>
        </NavItem>
        <NavItem className="nav">
          <NavLink href="#"><ChildCareIcon/><span className="linkName">Kids Items</span></NavLink>
        </NavItem>
        <NavItem className="nav" >
          <NavLink href="#"><PregnantWomanIcon/><span className="linkName">Women Slippers</span></NavLink>
        </NavItem>
        <NavItem className="nav" >
          <NavLink href="#"><PregnantWomanIcon/><span className="linkName">Women Clothing</span></NavLink>
        </NavItem>
        <NavItem className="nav" >
          <NavLink href="#"><AccessibilityIcon/><span className="linkName">Men Shirt</span></NavLink>
        </NavItem>
        <NavItem className="nav">
          <NavLink href="#"><PregnantWomanIcon/><span className="linkName">Accessories</span></NavLink>
        </NavItem>
        <NavItem className="nav" >
          <NavLink href="#"><AccessibilityIcon/><span className="linkName">Men Underwears</span></NavLink>
        </NavItem>
        <NavItem className="nav">
          <NavLink href="#"><PregnantWomanIcon/><span className="linkName">Women Undies</span></NavLink>
        </NavItem>
        </Collapse>
      </Nav>
      
      
    </div>
  );
}

export default LeftBar;