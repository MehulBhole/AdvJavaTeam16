import React, { useState } from "react";
import { sendOwnerData } from "../services/Owner";
import "../Css/RegisterOwner.css";

export function RegistrationOwner() {
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const handleToggleSwitch = () => {
    setShowAdditionalFields(!showAdditionalFields);
  };

  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Mobile: "",
    Password: "",
    Address: "",
    Dob: "",
    Pannumber: "",
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

  return (
    <div className="ownercontainer">
    <div className="regowner-container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
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

        <label >Name</label>
          <input type="text"  name="Name" onChange={handleChange} required></input>

          <label >Email ID</label>
          <input type="text" name="Email"  onChange={handleChange}  required></input>

          <label >Password</label>
          <input type="text" name="Password"  onChange={handleChange}  required></input>

          <label >Phone Number</label>
          <input
            type="text"
            maxLength={10}
            minLength={10}
            name ="Mobile"
            onChange={handleChange} 
            required
          ></input>

          <label >Pancard Number</label>
          <input
            type="text"
            name="Pannumber"
            maxLength={10}
            minLength={10}
            onChange={handleChange} 
            required
          ></input>

          <label >Date of Birth</label>
          <input type="date"  name="Dob" required></input>

        <div className="form-group">
          <label>Personal Address</label>
          <textarea
            className="txtarea"
            rows={4}
            cols={10}
            onChange={handleChange}
            name="Address"
          />
        </div>
        <center>
          <button className="nxtbtn" type="submit" >
            Next
          </button>
        </center>
      </form>
    </div>
    </div>
  );
}
