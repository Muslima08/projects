import "./brochure.css";
import React from "react";
import formimg from './formimg.png'
import { ReactPhotoSphereViewer, GyroscopePlugin} from "react-photo-sphere-viewer";


function Brochure() {
  const photoSphereRef = React.useRef();

  const plugins = [GyroscopePlugin];

  const handleClick = () => {
    const gyro = photoSphereRef.current.getPlugin(GyroscopePlugin);
    console.log(gyro);
  };

  return (
    <div>
      <ReactPhotoSphereViewer ref={photoSphereRef} plugins={plugins} onClick={handleClick}></ReactPhotoSphereViewer>
    </div>
  );
}

export default function App() {
  return (
    <div className="main-form">
    <form action="">
      <div className="brochureall">
        <div className="left position-relative">
          <div className="mainsform">
            <img src={formimg} alt="" />
            <div className="broslef position-absolute d-flex align-items-center flex-column">
              <h2 className="formtitle">don't miss the unique offer</h2>
              <p className="formtext">Be the first to experience the beauty of Keturah Resort at our exclusive private screening event! Leave your contact information below to receive an invitation to our special event.</p>
              <div></div>
              <div className="webcontent">
              <div className="tecont">
                <i class="fa-brands fa-telegram web"></i>
                <p className="telegtext">Telegram</p>
                </div>
                <div className="whacont">
                <i class="fa-brands fa-whatsapp web"></i>
                <p className="telegtext">WhatsApp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
        <form method="post">
    <div class="txt_field">
      <input type="text" required/>
      <label className="labeltext">Your name</label>
      <span></span>
    </div>
    <div class="txt_field">
      <input type="email" required/>
      <label className="labeltext">Your e-mail</label>
      <span></span>
    </div>
    <div class="txt_field">
      <input type="tel" required/>
      <label className="labeltext">Phone number</label>
      <span></span>
    </div>

    <input type="submit" class="submit" value="Join now"/>

    </form>
        </div>
      </div>
    </form>
  </div>
  );
}
