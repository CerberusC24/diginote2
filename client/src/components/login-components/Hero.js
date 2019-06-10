import React from 'react';

function Hero(props) {
  return (
    <div className="hero text-light">
      <div className="row w-100 justify-content-center">
        <h1 className="display-1 diginote-font text-center text-light col-12">DigiNote</h1>
        <div className="p-5 rounded-lg text-dark bg-light main-font box-shadow">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Hero;