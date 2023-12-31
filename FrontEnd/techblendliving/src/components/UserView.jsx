import { Carousel } from "react-bootstrap";
import "../Css/Userview.css";
import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import { fetchById } from "../services/User";
import imgandrew from "../media/a.jpg";

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
      const response = await fetchById(id);
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
              <b>
                Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                {userdata.name}
              </b>
            </div>
          )}
          {userdata && (
            <div className="userdiv">
              <b>
                Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {userdata.email}
              </b>
            </div>
          )}
          {userdata && (
            <div className="userdiv">
              <b>
                City:
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                {userdata.city}{" "}
              </b>
            </div>
          )}
          {userdata && (
            <div className="userdiv">
              <b>Phone No: {userdata.phoneNo}</b>
            </div>
          )}
        </div>
      </div>
      <div className="middleuser">
      <div className="searchbox1">
  <div className="searchPanel">
    <div className="searchbar-main">
      <input
        className="searchBox1"
        type="text"
        placeholder="Search your dream home"
      />
      <button className="searchbtn ml-auto">Search</button>
    </div>
  </div>
</div>
        <hr></hr>
        <div className="searchResult">
          <div className="corouselparent">
            <Carousel>
              <Carousel.Item>
                <img
                  src={imgandrew}
                  alt="First slide"
                  style={{
                    objectFit: "cover",
                    height: "300px",
                    width: "100%",
                  }}
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={imgandrew}
                  alt="Second slide"
                  style={{
                    objectFit: "cover",
                    height: "300px",
                    width: "100%",
                  }}
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={imgandrew}
                  alt="Third slide"
                  style={{
                    objectFit: "cover",
                    height: "300px",
                    width: "100%",
                  }}
                />
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
          <br></br>
          <div className="corouselparent">
            <Carousel>
              <Carousel.Item>
                <img
                  src={imgandrew}
                  alt="First slide"
                  style={{
                    objectFit: "cover",
                    height: "300px",
                    width: "100%",
                  }}
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={imgandrew}
                  alt="Second slide"
                  style={{
                    objectFit: "cover",
                    height: "300px",
                    width: "100%",
                  }}
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={imgandrew}
                  alt="Third slide"
                  style={{
                    objectFit: "cover",
                    height: "300px",
                    width: "100%",
                  }}
                />
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
      </div>
      <div className="rightuser"></div>
    </div>
  );
}
