import React, { useEffect, useState } from "react";
import { Button, Container, Row, Table } from "react-bootstrap";
import "../Css/Dashboard.css";
import { FaUser } from "react-icons/fa";

export function Dashboard() {
  
  const[details,setDetails] = useState([]);
  const [userdata, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNo: "",
    city: "",
  });
  const handleDelete=async(id)=>
{
 try {
  //  const response= await HostRejectionById(id);
  //  populateAdmindata()
  //   console.log(response);
 } catch (error) {
  console.log(error);
 }
}
const handleApprove=async(id)=>
{
 try {
   
      //     const response = await HostApprovalById(id);
      // populateAdmindata()
      //  console.log(response);

 } catch (error) {
  console.log(error);
 }
}
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
    <div className="middle">
    <center> <h3>Property Details</h3></center>
   
      <section >
      
        
          <form>
            <div className="radiobutton">
              <label htmlFor="property">Rental Type</label>
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
       
      </section>
    </div>
    <div className="right">
    <center><h2>Properties</h2></center>
         <Container className="containerHost">
            <Row>
            <Table striped bordered hover style={{textAlign:"center"}}>
      <thead>
        <tr>
          <th>Rental Type</th>
          <th>Rent</th>
          <th>Furnished Status</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
         {details.map(d=>
        <tr>
          <td>{d.name}</td>
          <td>{d.email}</td>
          <td>{d.phoneNo}</td>
          <td>{d.panNumber}</td>
          <td>{d.address}</td>

          <td>
          <Button style={{marginLeft: 1 + 'em'}}variant="danger" onClick={()=>{
            handleDelete(d.id)
          }}>Reject</Button>
           <Button style={{marginLeft: 1 + 'em'}}variant="success" onClick={()=>{
            handleApprove(d.id)
          }}>Approve</Button>
          </td>
          <td>{d.Remarks}</td>
          <td></td>
        </tr>
       )}
      </tbody>
    </Table>
            </Row>
        </Container>
    </div>
    </div>
  
  );
}
