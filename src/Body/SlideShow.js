import React from "react";
import { Fade } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import './Body.scss';
import { Container, Button, Link, styled} from '@mui/material';

const slideImages = [
  "assets/storage/slideshow-beads.jpg",
  "assets/storage/slideshow-event.jpg",
];

const SlideShowLink = styled(Link)(({ theme }) => ({
  color: '#fff',
  fontWeight: 'bold',
  marginRight: '8px',
  '&:hover': {
    textDecoration: 'none',
  }
}));

export default function SlideShow() { 
  return (
    <div className="slide-container">
      <Fade easing="ease">
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            <Container className="slideshow">
              <span>Beads</span>
              <p>We have a wide range of beads from hair beads, necklaces, bracelets etc</p>
              <SlideShowLink className="button slideshow-button-text">Buy Now</SlideShowLink>
              <SlideShowLink className="button slideshow-button-text">Inquire</SlideShowLink>
            </Container>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <Container className="slideshow">
                <span>Event planning and Management</span>
                <p>We do event planning management for all different types of events from weddings, birthdays ,coopera...</p>
                <SlideShowLink className="button slideshow-button-text">Buy Now</SlideShowLink>
                <SlideShowLink className="button slideshow-button-text">Inquire</SlideShowLink>
              </Container>
          </div>
        </div>
      </Fade>
    </div>
  );
}
