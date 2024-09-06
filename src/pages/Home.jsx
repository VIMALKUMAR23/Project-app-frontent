import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import home_img from "../assets/image2.png";
function Home() {
  return (
    <>
      <div
        className="container-fluid bg-success p-4 mb-4 mt-4"
        style={{ width: "100%", height: "100vh" }}
      >
        <Row>
          <Col
            md={6}
            className="d-flex justify-content-center align-items-center flex-column"
          >
            <div>
              <h3 className="text-light">Project Fair</h3>
              <h6>One stop destination for may software project</h6>
            </div>
            <Link to={"/login"}>
              <button className="btn btn-outline-light my-4">
                GET STARTED<i class="fa-solid fa-arrow-right ms-3"></i>
              </button>
            </Link>
          </Col>

          <Col
            md={6}
            className="d-flex justify-content-center align-items-center flex-colunm mt-5"
          >
            <img src={home_img} alt="" width="75%" />
          </Col>
        </Row>
      </div>
      <div className="container-fluid mb-5">
        <h3 className="text-center my-5">Expolre projects</h3>
        <div className="row">
          <div className="col-md-4 justify-content-center d-flex p-4"></div>
        </div>
        <Link to={"/project"} style={{ textDecoration: "none" }}>
          <h5 className="text-center">see more projects</h5>
        </Link>
      </div>
      
    </>
  );
}

export default Home;
