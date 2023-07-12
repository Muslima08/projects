
import "../modal/Appp.css";
import React from "react";
import {
  ReactPhotoSphereViewer,
  GyroscopePlugin
} from "react-photo-sphere-viewer";
import panarams from './360.png'

function PhotoSphere() {
  const photoSphereRef = React.useRef();

  const plugins = [GyroscopePlugin];

  const handleClick = () => {
    const gyro = photoSphereRef.current.getPlugin(GyroscopePlugin);
    console.log(gyro);
  };

  return (
    <div>
      <ReactPhotoSphereViewer
        ref={photoSphereRef}
        src={panarams}
        height={"70vh"}
        width={"100%"}
        plugins={plugins}
        onClick={handleClick}
      ></ReactPhotoSphereViewer>
    </div>
  );
}

export default function App() {
  return (
      <PhotoSphere />
  );
}
