import React from 'react'
import "./Navbar.css";
import back from "./images/back.jpg"
import vect from "./images/Vector.png"
const Navbar = () => {
  return (
    <div>
      <div className="position-relative">
        <img src={back} className='back' alt="" />
    
        <div class="content">
            <div className="all position-absolute">
                <div className="navbar">
                    <div>
                        <img src={vect} class="vect" alt="" />  
                    </div>
                <div class="text">
                    <h2 className="navtitle">The ritz - Carlton residences</h2>
                    <p className="pnav">Dubai, creekside</p>
                </div>
                </div>
                <div className="telall">
                <div class="icons">
                <i class="fa-brands fa-telegram webs"></i>
                <i class="fa-brands fa-whatsapp webs"></i>
              </div>
              <div className="telnumber">
                <p className="number">+99899 xxx xx xx</p>
              </div>
                </div>
            </div>
        </div>
  </div>
        
        
    </div>
  )
}

export default Navbar