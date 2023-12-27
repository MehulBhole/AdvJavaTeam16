import React, { useState } from 'react';
import "../Css/RegistrationUser.css";

export function RegistrationUser (){
    
    const [showAdditionalFields, setShowAdditionalFields] = useState(false);

    const handleToggleSwitch = () => {
      setShowAdditionalFields(!showAdditionalFields);
    };
    return (
        <>
          

<body>
    <div class="Reg-container">
        <h1>Register</h1><br />
        <form>
        <div className="toggle-switch-container">
        <label htmlFor="toggle-switch">Owners</label><br />
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
            <input type="text" id="email" name="email" required></input>


            <label for="email">City</label>
            <input type="text" id="email" name="email" required></input>

            <center><button className="nxtbtn" type="submit">Next</button></center>
        </form>
        <div class="or-separator">
          <br />
            <hr />
            <center>OR</center><br />
        </div>
        <div class="login-options">
            <a href="#" class="login-google">
              <p>Register with google </p>
            <img src="https://img.icons8.com/?size=48&id=17949&format=png" alt="lol" />
            </a>
        </div >
        
    </div>
    <div className="Foot" >
        <center><p>New here ? <a href="#">Sign Up</a></p></center>
        </div>
</body>



        </>
    )
}