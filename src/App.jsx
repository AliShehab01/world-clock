import "./App.css";
import { useState, useEffect } from "react";
import Clock from "./Clock.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function App() {
  return (
    <>
      <Container className="py-5 text-center">
        <h1 className="mb-4">World Clock</h1>

        <Row className="justify-content-center">
          <Col md={4} sm={12} className="mb-3">
            <div className="card p-3 shadow-sm">
              <Clock timeZone="Asia/Singapore" />
            </div>
          </Col>

          <Col md={4} sm={12} className="mb-3">
            <div className="card p-3 shadow-sm">
              <Clock timeZone="Europe/London" />
            </div>
          </Col>

          <Col md={4} sm={12} className="mb-3">
            <div className="card p-3 shadow-sm">
              <Clock timeZone="Asia/Tokyo" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
