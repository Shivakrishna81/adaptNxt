import React from 'react'
import logo from '../assets/logo.png'
import { IoMoonOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { RxShadowNone } from "react-icons/rx";
import './Header.css'


const Header = () => {
  return (
    <div className='headerContainer'>
          <img src={logo} alt='logo' className='logo'/> 
          <div className='iconsContainer'>
             <IoMoonOutline className='icon'/>
             <IoIosNotificationsOutline className='icon'/>
             <RxShadowNone className='icon'/>
             <MdAccountCircle className='icon'/>
          </div>
    </div>
  )
}

export default Header