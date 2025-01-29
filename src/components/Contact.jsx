import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaRegEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Here, you can integrate with an API or email service
  };

  return (
    <Container className="py-5" id="Contact">
      <h2 className="text-center mb-4 fw-bold">Contact</h2>
      <Row className="justify-content-center">
        {/* Left: Contact Information */}
        <Col md={5} className="mb-4">
          <h4>Get in Touch</h4>
          <div className="mt-3">
            <p>
              <FaEnvelope className="me-2 text-dark" /> Izuchukwualaneme@gmail.com
            </p>
            <p>
              <FaPhone className="me-2 text-dark" /> +234 813 002 6073
            </p>
            <p>
              <FaMapMarkerAlt className="me-2 text-dark" /> Lagos, Nigeria
            </p>
          </div>

          {/* Social Links */}
          <div className="mt-4 d-flex gap-3">
            <a
              href="https://www.linkedin.com/in/izuchukwu-alaneme-ai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={28} className="text-dark" />
            </a>
            <a
              href="https://github.com/Rockhillz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={28} className="text-dark" />
            </a>
            {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaXTwitter size={28} className="text-info" />
            </a> */}
            {/* <a href="mailto:izuchukwualaneme@gmail.com" target="_blank">
              <FaRegEnvelope size={28} className="text-danger" />
            </a> */}
          </div>
        </Col>

        {/* Right: Contact Form */}
        <Col md={6}>
          <Form
            onSubmit={handleSubmit}
            className="p-4 shadow-lg rounded-4 bg-light"
          >
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
