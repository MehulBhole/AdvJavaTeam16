import { Carousel } from "react-bootstrap";
import "../Css/Userview.css";
import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import { fetchById } from "../services/User";
export function UserView() {
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
      const response = await fetchById(id);
      console.log(response);
      setUserData(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    populateData();
  }, []);
  return (
    <div className="userview">
      <div className="leftuser">
        <div className="heading">
          <h2>User Info</h2>
          <hr></hr>
        </div>
        <div className="userData">
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
      <div className="middle">
        <div className="searchPanel">
          <form>
            <label>City:</label>
            <input type="text" name="City" />
            <button className="searchbtn">Search</button>
          </form>
        </div>
        <hr></hr>
        <div className="searchResult">
          <Carousel>
            <Carousel.Item>
              <img></img>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img></img>
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img></img>
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="rightuser"></div>
    </div>
  );
}
