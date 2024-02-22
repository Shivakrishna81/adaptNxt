import React, { useState } from 'react'
import Header from './components/Header'
import Order from './components/Order';
import randomimg from './assets/random.jpg'
import { AiOutlineDashboard } from "react-icons/ai";
import { SlTag } from "react-icons/sl";
import { IoMdReorder } from "react-icons/io";
import { MdOutlineLocalShipping } from "react-icons/md";
import { GoShareAndroid } from "react-icons/go";
import { LuSettings } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import './App.css'

const App = () => {
  const [selectedSection, setSelectedSection] = useState("Orders")

  const random = () => {
    return (
      <div>
        <img src={randomimg} alt="img"  className='randomimg'/>
      </div>
    )
  }


  const rightMainContainer = () => {
    switch (selectedSection) {
      case "Orders":
        return <Order/>;
      default:
        return random()
    }
  }

  return (
    
          <>
      <Header />
      <div className='mainContainer'>

        <div className='leftContainer'>

          <div className={`${selectedSection === "Dashboard" ? "selectedSection" : "sectionContainer"}`} onClick={() => setSelectedSection("Dashboard")}>
            <AiOutlineDashboard className='sectionIcon' />
            <p className='sectionHead'>Dashboard</p>
          </div>

          <div className={`${selectedSection === "Inventory" ? "selectedSection" : "sectionContainer"}`} onClick={() => setSelectedSection("Inventory")}>
            <SlTag className='sectionIcon' />
            <p className='sectionHead'>Inventory</p>
          </div>

          <div className={`${selectedSection === "Orders" ? "selectedSection" : "sectionContainer"}`} onClick={() => setSelectedSection("Orders")}>
            <IoMdReorder className='sectionIcon' />
            <p className='sectionHead'>Orders</p>
          </div>

          <div className={`${selectedSection === "Shipping" ? "selectedSection" : "sectionContainer"}`} onClick={() => setSelectedSection("Shipping")}>
            <MdOutlineLocalShipping className='sectionIcon' />
            <p className='sectionHead'>Shipping</p>
          </div>

          <div className={`${selectedSection === "Channel" ? "selectedSection" : "sectionContainer"}`} onClick={() => setSelectedSection("Channel")}>
            <GoShareAndroid className='sectionIcon' />
            <p className='sectionHead'>Channel</p>
          </div>

        </div>

        <div className='rightContainer'>

          <div className='rightTopContainer'>
            <div className='special'>
              <p className='specialText'>{selectedSection} <span><RxCross2 className='cross' /></span></p>
            </div>
            <div><LuSettings className='settings' /></div>
          </div>

          <div className='rightMainContainer'>
            {rightMainContainer()}
          </div>
        </div>

      </div>
    </>
    
  )
}

export default App