import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="container-fluid bg-success p-4 mb-4 " style={{ width: "100%", height: "100vh" }}>
        <Row>
          <Col md={6} className="d-flex justify-center align-items-center flex-column">
            <div>
              <h3 className="text-light">Project Fair</h3>
              <h6>One stop destination for may software project</h6>
            </div>
          </Col>
          <Link >
          <button className="btn btn-outline my-4">
            GET STARTED
          </button>
          </Link>
          <Col></Col>
          
        </Row>
        
      </div>
     
    </>
  );
}

export default Home;
