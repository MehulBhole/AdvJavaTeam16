import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import "../Css/Dashboard.css";

export function Dashboard() {
  return (
  
    <div className="maindiv">
    <div className="left"></div>
    <div className="right">
    <center> <h3>Property Details</h3></center>
    <section className="topDashboard" >
           
          <Row>
          
            <Col  xs={12} md={6} lg={3}>
              <Card style={{ width: "18rem", margin: "10px" }}>
                <Card.Img variant="top" src={`holder.js/100px180`} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col  xs={12} md={6} lg={3}>
              <Card style={{ width: "18rem", margin: "10px" }}>
                <Card.Img variant="top" src={`holder.js/100px180`} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col  xs={12} md={6} lg={3}>
              <Card style={{ width: "18rem", margin: "10px" }}>
                <Card.Img variant="top" src={`holder.js/100px180`} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
        
        </Row>
      </section>

      <section style={{backgroundColor:"#f0f0f0"}}>
        <div className="property-container">
          <h1>Property Details</h1>
          <form>
            <div className="radiobutton">
              <label htmlFor="property">For Rent</label>
              <input type="radio" name="property" value="PG" /> PG
              <input type="radio" name="property" value="1BHK" /> 1BHK
              <input type="radio" name="property" value="2BHK" /> 2BHK
              <input type="radio" name="property" value="3BHK" /> 3BHK
              <input type="radio" name="property" value="1RK" /> 1RK
            </div>
            <br />

            <label htmlFor="rent">Rent</label>
            <input type="text" id="rent" name="rent" required />

            <div className="radiobutton">
              <label htmlFor="furnished">Furnished</label>
              <input type="radio" name="furnished" value="Fully Furnished" /> Fully Furnished
              <input type="radio" name="furnished" value="Semi-Furnished" /> Semi-Furnished
              <input type="radio" name="furnished" value="No" /> No
            </div>

            <label>Address</label>
            <textarea
              className="txtarea"
              rows={4}
              cols={10}
            />

            <label htmlFor="image1">Images</label>
            <input type="file" name="image1" accept="image/*" required />

            <label htmlFor="image2">Images</label>
            <input type="file" name="image2" accept="image/*" required />

            <label htmlFor="image3">Images</label>
            <input type="file" name="image3" accept="image/*" required />

            <label htmlFor="video">Video</label>
            <input type="file" name="video" accept="video/*" required />

            <center>
              <button className="nxtbtn" type="submit">
                Save
              </button>
            </center>
          </form>
        </div>
      </section>
    </div>
    </div>
  
  );
}
