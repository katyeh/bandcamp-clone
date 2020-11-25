import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import Controls from './Controls'



function Player() {
  return <div style={style}>

    <Controls/>
  </div>
}


const PlayerContainer = () => {

  return (
    <Player
    />
  )
}

let style = {
  position: "absolute",
  bottom: "0",
  left: "0",
  width: "100%",
  height: "80px",
  background: "#282828",
  // zIndex: "99",
  padding: "0 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

export default PlayerContainer;
