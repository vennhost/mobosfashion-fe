import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Dehaze } from '@material-ui/icons';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ChildCareIcon from '@material-ui/icons/ChildCare';

const LeftBar = (props) => {
  return (
    <div className="sideLink">
      <p className="categoryList"><span className="listIcon"><FormatListBulletedIcon /></span><span>Categories</span></p>
      
      <Nav vertical>
        <NavItem className="nav" >
          <NavLink href="#">Women Shoes</NavLink>
        </NavItem>
        <NavItem className="nav" >
          <NavLink href="#"><LocalMallIcon/>Women Bags</NavLink>
        </NavItem>
        <NavItem className="nav" >
          <NavLink href="#">Men Shoes</NavLink>
        </NavItem>
        <NavItem className="nav">
          <NavLink href="#"><ChildCareIcon/>Kids Items</NavLink>
        </NavItem>
        <NavItem className="nav" >
          <NavLink href="#">Women Slippers</NavLink>
        </NavItem>
        <NavItem className="nav" >
          <NavLink href="#">Women Clothing</NavLink>
        </NavItem>
        <NavItem className="nav" >
          <NavLink href="#">Men Shirt</NavLink>
        </NavItem>
        <NavItem className="nav">
          <NavLink href="#">Accessories</NavLink>
        </NavItem>
        <NavItem className="nav" >
          <NavLink href="#">Men Underwears</NavLink>
        </NavItem>
        <NavItem className="nav">
          <NavLink href="#">Women Undies</NavLink>
        </NavItem>
      </Nav>
      
      
    </div>
  );
}

export default LeftBar;