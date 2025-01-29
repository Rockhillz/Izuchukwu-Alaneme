// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer
//       className="bg-dark text-light "
//       style={{
//         position: "fixed",
//         bottom: 0,
//         width: "100%",
//         // zIndex: 10,
//       }}
//     >
//       <Container className="justify-content-between">
//         <Row className="align-items-center">
//           {/* Social Media Links */}
//           <Col
//             xs={12}
//             md={4}
//             className="text-center text-md-start mb-3 mb-md-0"
//           >
//             <h5>Connect with Me</h5>
//             <div className="d-flex justify-content-center justify-content-md-start gap-3">
//               <a
//                 href="https://github.com/yourusername"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-light"
//               >
//                 <FaGithub size={24} />
//               </a>
//               <a
//                 href="https://linkedin.com/in/yourusername"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-light"
//               >
//                 <FaLinkedin size={24} />
//               </a>
//               <a
//                 href="https://twitter.com/yourusername"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-light"
//               >
//                 <FaTwitter size={24} />
//               </a>
//               <a href="mailto:youremail@example.com" className="text-light">
//                 <FaEnvelope size={24} />
//               </a>
//             </div>
//           </Col>

//           {/* Quick Links
//           <Col xs={12} md={4} className="text-center mb-3 mb-md-0">
//             <h5>Quick Links</h5>
//             <ul className="list-unstyled">
//               <li>
//                 <a href="#home" className="text-light text-decoration-none">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="#projects" className="text-light text-decoration-none">
//                   Projects
//                 </a>
//               </li>
//               <li>
//                 <a href="#contact" className="text-light text-decoration-none">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </Col> */}

//           {/* Copyright Notice */}
//           <Col xs={12} md={4} className="text-center text-md-end">
//             <h5>Your Brand Name</h5>
//             <p className="mb-0">
//               &copy; {new Date().getFullYear()} Your Brand Name. All rights
//               reserved.
//             </p>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-dark text-light"
      style={{
        position: "relative", // Allows the footer to naturally appear at the end
        width: "100%",
        padding: "1rem 0",
      }}
    >
      <Container>
        <Row className="justify-content-between align-items-center">
          {/* Social Media Links */}
          <Col xs={12} md={4} className="text-center text-md-start mb-3 mb-md-0">
            <h5>Connect with Me</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a
                href="https://github.com/Rockhillz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/izuchukwu-alaneme-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
              >
                <FaLinkedin size={24} />
              </a>
              {/* <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
              >
                <FaTwitter size={24} />
              </a>
              <a href="mailto:izuchukwualaneme@gmail.com" className="text-light">
                <FaEnvelope size={24} />
              </a> */}
            </div>
          </Col>

          {/* Copyright Notice */}
          <Col xs={12} md={4} className="text-center text-md-end">
            <h5>izuChi</h5>
            <p className="mb-0">
              &copy; {new Date().getFullYear()} izuChi. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
