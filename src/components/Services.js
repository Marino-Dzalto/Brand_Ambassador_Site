import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons

const Services = () => {
  const { t } = useTranslation();

  const services = [
    { title: t('services.item1'), description: 'Optimizing sales territories to maximize efficiency and coverage.', icon: 'bi-geo-alt' },
    { title: t('services.item2'), description: 'Comprehensive market research and analysis to identify opportunities.', icon: 'bi-search' },
    { title: t('services.item3'), description: 'Tailored sales strategies to meet your unique business goals.', icon: 'bi-lightbulb' },
    { title: t('services.item4'), description: 'Advanced analytics to track and improve sales performance.', icon: 'bi-bar-chart' },
    { title: t('services.item5'), description: 'Effective lead generation to grow your customer base.', icon: 'bi-person-plus' },
  ];

  return (
    <section id="services" className="py-5">
      <Container>
        <h2 className="text-center">{t('services.title')}</h2>
        <Row className="justify-content-center">
          {services.map((service, index) => (
            <Col key={index} xs={12} sm={6} md={4} className="mb-4">
              <div className="service-box p-3 text-center">
                <h4>
                  <i className={`bi ${service.icon} me-2`}></i>
                  {service.title}
                </h4>
                <p>{service.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;