// src/components/AgricultureAI.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const Title = styled.h2`
  color: #333333;
  margin-bottom: 20px;
`;

const ImageContainer = styled.div`
  padding: 10px;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const AgricultureAI = () => {
  const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.jpg"
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container>
      <Title>Aplicaciones de IA en Agricultura</Title>
      <Slider {...settings}>
        {images.map((src, index) => (
          <ImageContainer key={index}>
            <Image src={src} alt={`Agricultura ${index + 1}`} />
          </ImageContainer>
        ))}
      </Slider>
    </Container>
  );
};

export default AgricultureAI;
