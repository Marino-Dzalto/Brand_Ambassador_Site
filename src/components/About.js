import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  const partners = [
    { name: 'Pekarne Klara d.d.', logo: '/Public_Media/partners/Klara.png', url: 'https://www.pekarne-klara.hr' },
    { name: 'Nutrifit Food', logo: '/Public_Media/partners/nutrifit-food-logo.png', url: 'https://www.nutrifitfood.com' },
    { name: 'Podravka Hrvatska', logo: '/Public_Media/partners/PodravkaGrupa.png', url: 'https://www.podravka.hr' },
    { name: 'Žito Ljubljana', logo: '/Public_Media/partners/Žito Ljubljana.png', url: 'https://www.zito.si' },
    { name: 'DonDon', logo: '/Public_Media/partners/DonDon.png', url: 'https://www.dondon.si' },
    { name: 'Kaufland', logo: '/Public_Media/partners/Kaufland-logo.png', url: 'https://www.kaufland.de' },
    { name: 'Edeka', logo: '/Public_Media/partners/edeka.png', url: 'https://www.edeka.de' },
    { name: 'Lidl', logo: '/Public_Media/partners/Lidl-logo.png', url: 'https://www.lidl.de' },
    { name: 'Rewe', logo: '/Public_Media/partners/Rewe.png', url: 'https://www.rewe.de' },
    { name: 'Norma', logo: '/Public_Media/partners/Norma.png', url: 'https://www.norma-online.de' },
    { name: 'Penny', logo: '/Public_Media/partners/penny.png', url: 'https://www.penny.de' },
  ];

  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <h2 className="text-center">{t('about.title')}</h2>
        <p>{t('about.description')}</p>
        <h3 className="text-center mt-5">{t('about.partners')}</h3> 
        <Row className="mt-4">
          {partners.map((partner, index) => (
            <Col key={index} xs={6} sm={4} md={3} className="text-center mb-4">
              <div className="partner-box">
                <h5>{partner.name}</h5>
                <img src={partner.logo} alt={partner.name} className="partner-logo" />
                <Button
                  variant="outline-primary"
                  size="sm"
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2"
                >
                  {t('about.visit_website')}
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default About;