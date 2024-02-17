import React from "react";
import { Row, Col, Container } from "react-bootstrap";
// import img from '../res/footerImg.png';
import "../Pages/style/footer.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaAdversal,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer">
      <Container>
        <Row>
          <Col sm>
            {/* <img
                            alt="img"
                            src={img}
                            width="300"
                            height="auto"
                            className="d-inline-block align-top"
                        /> */}
          </Col>
          <Col md className="contact">
            <strong>CONTACT US</strong>
            <hr />
            <h6 className="flex">
              <FaMapMarkerAlt />
              &nbsp; &nbsp; HBTU, Kanpur
            </h6>
            <div className="flex">
              {" "}
              <FaPhoneAlt />
              <a
                className="numMail"
                style={{ textDecoration: "none", color: "rgb(255,255,255)" }}
                href="tel:+91-6393743138"
              >
                &nbsp; &nbsp; +91-6393743138
              </a>
              ,
              <a
                className="numMail"
                style={{ textDecoration: "none", color: "rgb(255,255,255)" }}
                href="tel:+91-6392063720"
              >
                &nbsp;+91-6392063720
              </a>
            </div>
            <div className="flex">
              {" "}
              <FaEnvelope />
              <a
                className="numMail"
                style={{ textDecoration: "none", color: "rgb(255,255,255)" }}
                href="mailto:aagaz2k23@gmail.com"
              >
                &nbsp; &nbsp; aagaz2k23@gmail.com
              </a>
            </div>
     
              <div style={{display:"flex"}}>
              <a className="icons"  href="https://www.instagram.com/hbtusports/"><FaInstagram /></a>
              <a className="icons"><FaLinkedin/></a>
            <a className="icons">    <FaFacebook/> </a>
              </div>
    
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
