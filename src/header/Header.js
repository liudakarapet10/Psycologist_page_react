import React, {useState} from 'react';
import './Header.css';
import {AiOutlineMenu} from "react-icons/ai";
import DropDownMenu from './DropDownMenu';

function Header () {
  const[showDropDownMenu,setShowDropDownMenu]=useState(false);

  const handleDropDownMenu = () => {
    setShowDropDownMenu(!showDropDownMenu);
    
  }
    return(
     <div className='header'>
      <div className='header_logo'>
        <a href='#'> Norah Horowitz, Ph.D</a>  
      </div> 
      <nav className='header_menu'>
        <a href="#home">Home</a>
        <a href="#">Services</a>
        <a href="#areasOfExpertise">Areas of Expertise</a>
        <a href="#">My Approach</a>
        <a href="#">Podcast</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="menu_icon_box">
        <AiOutlineMenu className='menu_icon' onClick={handleDropDownMenu}/>
        { showDropDownMenu? <DropDownMenu/> : null}
      </div>  
     </div>
    )
}

export default Header;