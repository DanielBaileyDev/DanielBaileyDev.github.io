import React from 'react';
import './Hero.css'

function Hero(props) {
  const { background, title } = props;

  const heroBackground = {
    background: background,
  };
  return (
    <main style={heroBackground}>
      {props.children}
      <h1>{title}</h1>
    </main>
  );
}

export default Hero;