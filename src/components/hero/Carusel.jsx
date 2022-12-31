import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "./Carusel.css";
import { slide1, slide2, slide3 } from "../../assets/img/Picture";
export default function Carusel() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",  }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dotsClass: "button_active",
  };
  const Img = styled.img`
    height: 500px;
    width: 1200px !important ;
    border-radius: 20px;
  `;
  return (
    <>
      <Slider  {...settings}>
        <Img width={'1200px'} style={{width:'1200px'}} src={slide1} alt="img" />
        <Img width={'1200px'} style={{width:'1200px'}} src={slide2} alt="img" />
        <Img width={'1200px'} style={{width:'1200px'}} src={slide3} alt="img" />
      </Slider>
    </>
  );
}
