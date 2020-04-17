import React from "react";
import { Container, Row, Col } from "reactstrap";

class Footer extends React.Component {
  state = {};
  render() {
    return (
      <>
       <div className="footer pt-5">
       <Container className="footerText">
        <Row>
          <Col>
            <ul>
                <h4>About Us</h4>
                <li>Online Stories</li>
                <li>Online Stories</li>
                <li>Online Stories</li>
                <li>Online Stories</li>
                <li>Online Stories</li>
            </ul>
          </Col>
          <Col>
          <ul>
                <h4>Corporate</h4>
                <li>Online Stories</li>
                <li>Online Stories</li>
                <li>Online Stories</li>
                <li>Online Stories</li>
                <li>Online Stories</li>
            </ul>
          </Col>
          <Col>
          <ul>
                <h4>Responsibilities</h4>
                <li>Online Stories</li>
                <li>Online Stories</li>
                <li>Online Stories</li>
                <li>Online Stories</li>
                <li>Online Stories</li>
            </ul>
          </Col>
          
        </Row>
       
          
            
          </Container>
        </div>
      </>
    );
  }
}

export default Footer;
