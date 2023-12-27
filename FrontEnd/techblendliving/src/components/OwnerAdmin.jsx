import { Container, Row } from "react-bootstrap";
import { Dashboard } from "./DashBoard";
import { OwnerData } from "./OwnerData";

export function OwnderAdmin(){
    return(
        <Container>
       <Row>
         <col >
         <Dashboard></Dashboard>
         <OwnerData></OwnerData>
      </Row>
        </Container>
    );
}