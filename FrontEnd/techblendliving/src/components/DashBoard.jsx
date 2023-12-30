import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import "../Css/Dashboard.css";
import { FaUser } from "react-icons/fa";

export function Dashboard() {
  const [userdata, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNo: "",
    city: "",
  });
  async function populateData() {
    try {
      const id = sessionStorage.getItem("id");
      console.log(id);
      // const response = await fetchById(id);
      // console.log(response);
      // setUserData(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    populateData();
  }, []);
  return (
  
    <div className="maindiv">
    <div className="left">
    <div className="heading">
          <h2>Owner Info</h2>
          <hr></hr>
        </div>
        <div >
          <div className="usericon">
            <FaUser size={90}></FaUser>
          </div>
         

            {userdata && (
              <div className="userdiv">
                <b>Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {userdata.name}</b>
              </div>
            )}

            {userdata && (
              <div className="userdiv">
                <b>Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{userdata.email}</b>
              </div>
            )}

            {userdata && (
              <div className="userdiv">
                <b>City: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {userdata.city} </b>
              </div>
            )}

            {userdata && (
              <div className="userdiv">
                <b>Phone No: {userdata.phoneNo}</b>
              </div>
            )}
          </div>
        
    </div>
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
