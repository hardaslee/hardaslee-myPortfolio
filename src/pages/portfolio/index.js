import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import Weather from "../weather"; // Import the Weather component

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio Projects </h1>
            <hr className="t_border my-4 ml-0 text-left" />

            <div className="mb-5 po_items_ho">
              {dataportfolio.map((data, i) => (
                <div key={i} className="po_item">
                  <img src={data.img} alt="" />
                  <div className="content">
                    <p>{data.name}</p>
                    <p>{data.description}</p>
                    <a href={data.link}>View project</a>
                  </div>
                </div>
              ))}
            </div>
          </Col>

          {/* Weather Component on the left side */}
          <Col lg="4">
          
            
            {/* Additional content under the Weather component */}
            <div className="additional-content text-center">
            <br></br>
              <h2>Resume/CV</h2>
              <br></br>
              <a href="https://drive.google.com/file/d/1_oHuuYCnZXbZU5AsMdvJTeq0LtPq1oUN/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
           <button className="btn btn-primary">View Resume/CV</button> 
    </a>  
            </div>
            <br></br> <br></br>
            <Weather />
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
