import React from 'react';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';

const Navigation = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Brand Ambassador</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="home" smooth={true} duration={500}>
              {t('navbar.home')}
            </Nav.Link>
            <Nav.Link as={Link} to="services" smooth={true} duration={500}>
              {t('navbar.services')}
            </Nav.Link>
            <Nav.Link as={Link} to="about" smooth={true} duration={500}>
              {t('navbar.about')}
            </Nav.Link>
            <Nav.Link as={Link} to="contact" smooth={true} duration={500}>
              {t('navbar.contact')}
            </Nav.Link>
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                {t('navbar.language')}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => changeLanguage('en')}>
                  English
                </Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguage('de')}>
                  Deutsch
                </Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguage('hr')}>
                  Hrvatski
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;