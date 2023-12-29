import { Carousel } from "react-bootstrap";
import "../Css/Userview.css";
export function UserView() {
  return (
    <div className="userview">
      <div className="leftuser"></div>
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
