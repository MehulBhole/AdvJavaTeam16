import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../Css/RegisterOwner.css";

import { sendOwnerData } from "../services/Owner";

export function RegistrationOwner() {
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);

    const handleToggleSwitch = () => {
      setShowAdditionalFields(!showAdditionalFields);
    };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    address: "",
    dob: "",
    panNumber: "",
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await sendOwnerData(formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    console.log("Form Data:", formData);
  };

  const styles = {
    registrationForm: {
      maxWidth: "400px",
      margin: "0 auto",
      marginBottom: "100px",
    },
    form: {
      backgroundColor: "#fff",
      padding: "15px",
      borderRadius: "8px",
      boxShadow: "0 0 8px rgba(0, 0, 0, 0.1)",
    },
    label: {
      fontWeight: "bold",
      fontSize: "14px",
    },
    button: {
      marginTop: "10px",
      fontSize: "14px",
    },
  };

  return (
    <body >
      <div class="regowner-container">
        <h1>Register</h1>
        <br />
        <form>
          <div className="toggle-switch-container">
            <label htmlFor="toggle-switch">Owners</label>
            <br />
            <div className="toggle-switch">
              <input
                type="checkbox"
                id="toggle-switch"
                checked={showAdditionalFields}
                onChange={handleToggleSwitch}
              />
              <label htmlFor="toggle-switch"></label>
            </div>
          </div>

          <br />
          <label for="email">Name</label>
          <input type="text" id="email" name="email" required></input>

          <label for="email">Email ID</label>
          <input type="text" id="email" name="email" required></input>

          <label for="email">Password</label>
          <input type="text" id="email" name="email" required></input>

          <label for="email">Phone Number</label>
          <input
            type="text"
            id="email"
            name="email"
            maxLength={10}
            minLength={10}
            required
          ></input>

          <label for="email">Pancard Number</label>
          <input
            type="text"
            id="email"
            name="email"
            maxLength={10}
            minLength={10}
            required
          ></input>

          <label for="email">Date of Birth</label>
          <input type="date" id="email" name="email" required></input>

          <label>Personal Address </label>
        
          <textarea className="txtarea"
             // value={textareaValue}
             // onChange={handleTextareaChange}
             rows={4} // Adjust the number of rows as needed
             cols={10} // Adjust the number of columns as needed
          />
             
      
            <label for="email">City</label>
            <input type="text" id="email" name="email" required></input>

          <center>
            <button className="nxtbtn" type="submit">
              Next
            </button>
          </center>
        </form>
        <div class="or-separator">
          <br />
          {/* <hr /> */}
          {/* <center>OR</center><br /> */}
        </div>
        {/* <div class="login-options">
            <a href="#" class="login-google">
              <p>Register with google </p>
            <img src="https://img.icons8.com/?size=48&id=17949&format=png" alt="lol" />
            </a>
        </div > */}
      </div>
      <div className="Foot">
        <center>
          <p>
            New here ? <a href="#">Sign Up</a>
          </p>
        </center>
      </div>
    </body>
  );
}
