import React, {useState} from 'react'
import "./Modalsrc.css";
// import {Link} from 'react-router-dom'
import Form from "../modal/Form"
import Brochure from "../modal/Brochure"
import { Modal } from "antd";


const Modalsrc = () => {
   
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const showBrochure = () => {
    setIsBrochureOpen(true);
  };
  const handleeOk = () => {
    setIsBrochureOpen(false);
  };
  const handleeCancel = () => {
    setIsBrochureOpen(false);
  };
  return (
    <div >
    <div className='container header-top'>
            <div class="header__all d-flex justify-content-between position-absolute">
                <div className='searchdiv d-flex align-items-center'>  
            <button onClick={showModal} class="avatarbtn">
              <div className="buttonall">
                <div className="buttonleft">
                  <p className="buttonlp">M2</p>
                </div>
                <div className="buttonright">
                  <p className="buttonrp">Mansions</p>
                </div>
              </div>
            </button>
            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
              <Form />
            </Modal>
                </div>
            </div>
            <div class="header_second d-flex justify-content-between position-absolute">
                <div className='searchdiv d-flex align-items-center'>  
            <button onClick="" class="avatarbtn">
              <div className="buttonall">
                <div className="buttonleft">
                  <p className="buttonlp">P1</p>
                </div>
                <div className="buttonright">
                  <p className="buttonrp">Park</p>
                </div>
              </div>
            </button>
                </div>
            </div>
            <div class="header_third d-flex justify-content-between position-absolute">
                <div className='searchdiv d-flex align-items-center'>  
            <button onClick="" class="avatarbtn">
              <div className="buttonall">
                <div className="buttonleft">
                  <p className="buttonlp">M1</p>
                </div>
                <div className="buttonright">
                  <p className="buttonrp">Apartments</p>
                </div>
              </div>
            </button>
                </div>
            </div>
            <div class="header_fourth d-flex justify-content-between position-absolute">
                <div className='searchdiv d-flex align-items-center'>  
            <button onClick="" class="avatarbtn">
              <div className="buttonall">
                <div className="buttonleft">
                  <p className="buttonlp">R2</p>
                </div>
                <div className="buttonright">
                  <p className="buttonrp">Road</p>
                </div>
              </div>
            </button>
                </div>
            </div>
            <div class="header__fifth d-flex justify-content-between position-absolute">
                <div className='searchdiv d-flex align-items-center'>  
            <button onClick={showBrochure} class="avatarbtn">
              <div className="buttonall">
                  <p className="buttondownload">Download brochure 
                  <i class="fa-solid fa-arrow-down-to-line download"></i>
                  </p>
              </div>
            </button>
            <Modal open={isBrochureOpen} onOk={handleeOk} onCancel={handleeCancel}>
              <Brochure/>
            </Modal>
                </div>
            </div>
            </div>

    </div>
  )
}


export default Modalsrc