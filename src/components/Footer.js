import React from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-dark text-white py-3">
      <Container>
        <p className="text-center">{t('footer.rights')}</p>
      </Container>
    </footer>
  );
};

export default Footer;