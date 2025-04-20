import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-5">
      <Container>
        <h2 className="text-center">{t('contact.title')}</h2>
        <p>
          {t('contact.name')}<br />
          {t('contact.address')}<br />
          {t('contact.email')}<br />
        </p>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Your message" />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3">
            Send
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;