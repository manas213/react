import React, { Component } from "react";
import Slider from "react-slick";
import './recommendation.css'

export default class Recommendation extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseeOnHover: true,
    //   centerMode: true, 
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="container mx-auto mt-5">
        <Slider {...settings}>
          <div>
            <div className="slick-img-container">
              <img src="./image/img8.jpeg" alt=""></img>
            </div>
          </div>
          <div>
            <div className="slick-img-container">
              <img src="./image/img9.jpg" alt=""></img>
            </div>
          </div>
          <div>
            <div className="slick-img-container">
              <img src="./image/img10.jpg" alt=""></img>
            </div>
          </div>
          <div>
            <div className="slick-img-container">
              <img src="./image/img11.jpg" alt=""></img>
            </div>
          </div>
          <div>
            <div className="slick-img-container">
              <img src="./image/img12.png" alt=""></img>
            </div>
          </div>
          <div>
            <div className="slick-img-container">
              <img src="./image/img13.jpg" alt=""></img>
            </div>
          </div>
          <div>
            <div className="slick-img-container">
              <img src="./image/img14.jpg" alt=""></img>
            </div>
          </div>
          <div>
            <div className="slick-img-container">
              <img src="./image/img15.jpg" alt=""></img>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
