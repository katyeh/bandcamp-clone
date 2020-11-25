import React from 'react';


const Controls = () => {
  return (
    <div style={style}>
      <i className="fa fa-fast-backward"></i>
      <i className="fa fa-play"></i>
      <i className="fa fa-fast-forward"></i>
    </div>
  )
}

let style = {
  color:'white',
  display: "flex",
}


export default Controls
