import React, {useRef} from "react";
import "./Product.css";
import {Link} from "react-router-dom"
import udio1 from './assets/Density.mp3'
import udio2 from './assets/Pollination.mp3'
import udio3 from './assets/Periodic.mp3'

function Product({ title, image, link }) {

  const product = useRef(null)

  const audio1 = new Audio(udio1);
  const audio2 = new Audio(udio2);
  const audio3 = new Audio(udio3);
  const speak = ({title}) => {
    if (title === "Pollination"){
      audio2.play();
    }
      
    else if (title === "Density")
    {
      audio1.play();
    }
    else if (title === "Periodic Table")
    {
      audio3.play();
    }
  }
  const dontspeak = ({title}) => {
    if (title === "Pollination"){
      audio2.pause();
    }
      
    else if (title === "Density")
    {
      audio1.pause();
    }
    else if (title === "Periodic Table")
    {
      audio3.pause();
    }
    
  }

  return (
      <Link className="product-container" to={link}>
    <div className="product" ref={product} onMouseEnter={() => speak({title})} onMouseLeave={() => dontspeak({title})}>
      <div className="product_info">
        <p>{title}</p>
      </div>
      <img src={image} alt="" />
    </div>
    </Link>
  );
}

export default Product;
