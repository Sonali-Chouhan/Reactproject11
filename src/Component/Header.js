import React from "react";
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav'

const Header=()=>{
return(
    <div className="Header">
    <Nav justify variant="tabs" defaultActiveKey="/home">
    <Nav.Item>
        <Link to="/" >Home</Link>
    </Nav.Item>
    <Nav.Item>
        <Link to="/profile" >Profile</Link>
    </Nav.Item>
    <Nav.Item>
    <Link to="/user-table" >Table</Link>
    </Nav.Item>
    <Nav.Item>
    <Link to="/about" >About</Link>
    </Nav.Item>
       
        
      

    </Nav>
    </div>
)
}
export default Header;