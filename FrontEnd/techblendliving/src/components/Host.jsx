import { useEffect, useState } from "react";
import { Button, Container, Row, Table } from "react-bootstrap";
import "../Css/Host.css";
export function Host(){

    const[details,setDetails] = useState([]);

    async function populateAdmindata() {
      try {
        // const response =  await FetchAdminData();
        // console.log(response);
        //  setDetails(response.data);
       
      } catch (error) {
        console.log(error);
      }
};
const handleDelete=async(name)=>
{
 try {
//    const response= await adminDeletion(name);
//    populateAdmindata()
//    console.log(response);
 } catch (error) {
  console.log(error);
 }
}
const handleApprove=async(name)=>
{
 try {
//   console.log(name);
//      const response = await adminApproval(name);
//      populateAdmindata()
//        console.log(response);

 } catch (error) {
  console.log(error);
 }
}
 useEffect(()=>
   { 
    populateAdmindata()
   },[])

    return(
    <div className="host">
        <center><h2>Host Approval</h2></center>
         <Container className="containerHost">
            <Row>
            <Table striped bordered hover style={{textAlign:"center"}}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone No</th>
          <th>Pancard Number</th>
          <th>City</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
         {details.map(d=>
        <tr>
          <td>{d.Designation}</td>
          <td>{d.Name}</td>
          <td>{d.Mobile}</td>
          <td>
          <Button style={{marginLeft: 1 + 'em'}}variant="danger" onClick={()=>{
            handleDelete(d.Name)
          }}>Delete</Button>
           <Button style={{marginLeft: 1 + 'em'}}variant="success" onClick={()=>{
            handleApprove(d.Name)
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
    );
}