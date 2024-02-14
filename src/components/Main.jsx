import React from 'react'
import mem from '../images/mem.jpg';
import { Button, Col, Row } from 'react-bootstrap';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import c from '../images/c.jpg';
import c1 from '../images/c1.jpg';
import c2 from '../images/c2.jpg';



function Main() {

    const carouselData = [
        { imageSrc: c1, caption: 'Lower Interest Rates' },
        { imageSrc: c2, caption: 'Interest Free Payments' },
        { imageSrc: c, caption: 'Discount On Materials' },
        
      ];
    
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, 
        slidesToScroll: 1,
      };
      
    
  return (
    <div>
        <Row>
            <Col></Col>
            <Col lg={3} className='mt-3'>
                <h3>New Arrival</h3>
                <p style={{fontSize:'10px'}}>JOIN TODAY</p>
                <img src={mem} alt=""style={{width:"260px",height:"340"}} /><br/>
                <Button variant="outline-secondary text-info" style={{borderRadius:'20px',width:'200px',fontSize:'14px',backgroundColor:'rgb(249, 246, 246)' }}>JOIN NOW</Button>
            </Col>
            <Col lg={5} className='mt-3'>
                <h2 className='mb-5'>Unlock Premium Features Now</h2>
                <Slider {...settings}>
  {carouselData.map((item, index) => (
    <div key={index} className="carousel-card-wrapper">
  <div className="carousel-card">
    <img src={item.imageSrc} alt={item.caption} style={{ width: '100%', height: 'auto' }} />
    <p className="caption" style={{fontFamily:"fantasy"}}>{item.caption}</p>
  </div>
</div>


  ))}
</Slider>
<Button className='mt-5 mb-2' style={{backgroundColor:"rgb(72, 129, 110)",borderRadius:'20px',width:'200px',marginLeft:'200px'}}>UNLOCK NOW</Button><br/>
<Button className='mb-3' style={{backgroundColor:"rgb(72, 129, 110)",borderRadius:'20px',width:'200px',marginLeft:'200px'}}>DETAILS</Button>
               
            </Col>
            <Col></Col>
        </Row>
    </div>
  )
}

export default Main