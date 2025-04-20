import React from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import video from '../media/Background Video 1920x1080 (1).mp4';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div id="home" className="home-section position-relative text-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="home-video"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="home-overlay">
      <Container>
        <h1>{t('home.title')}</h1>
        <p>{t('home.description')}</p>
      </Container>
      </div>
    </div>
  );
};

export default Home;