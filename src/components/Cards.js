
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/cards.css';
import hoopoe1 from '../images/Eurasian Hoopoe.jpg';
import hoopoe2 from '../images/African Hoopoe.jpg';
import hoopoe3 from '../images/Green Wood Hoopoe.jpg';
import hoopoe4 from '../images/Madagascar Hoopoe.jpg';


function Type() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='row card-holder'>
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={hoopoe1}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 hoope"
            src={hoopoe2}
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default Type