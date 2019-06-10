import React from 'react';

function Hero(props) {
  return (
    <div className="hero">
      {props.children}
    </div>
  )
}

export default Hero;