import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Contact.css'

const ContactSection = () => {
  return (
    <section id="contact" className="bg-light">
      <Container>
        <Row>
          <Col lg={5}>
            <div className='infos'>
            <h2 className="my-4">Contact Us</h2>
            <p>
              Get in touch with us !
            </p>
            <ul className="list-unstyled mb-0">
              <li><FaEnvelope className="mr-2"/>example@website.com</li>
              <li><FaPhone className="mr-2"/>+123 456 7890</li>
              <li>
                <a href="#">
                  <FaFacebook className="mr-2"/>
                </a>
                <a href="#">
                  <FaTwitter className="mr-2"/>
                </a>
                <a href="#">
                  <FaInstagram className="mr-2"/>
                </a>
              </li>
            </ul></div>
          </Col>
          
          <Col lg={7}>
            <form className='formulaire'>
              <Row>
                <Col md={6}>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="First Name" />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Last Name" />
                  </div>
                </Col>
              </Row>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Email Address" />
              </div>
              <div className="form-group">
                <textarea className="form-control" placeholder="Message" rows="5"></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-lg">Submit</button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
