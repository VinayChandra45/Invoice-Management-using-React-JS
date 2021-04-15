import React from 'react';
import './Header.css';
import url from '../assets/logo.svg';
import logourl from '../assets/Group 20399.svg';
const Header = () => (
<div >   
{/* using img tag to place logos in header */}
  <img src = {logourl} width="200" height="50" className="header"/>  
  <img src={url} width="200" height="50" className="header1"/>
</div>
)

export default Header;