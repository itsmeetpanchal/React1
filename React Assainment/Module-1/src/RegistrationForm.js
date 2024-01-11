import React from 'react';

function RegistrationForm() {
  return (
    <div>
      <form>
        <div className="container">
          <center>
            <h1>Student Registration Form</h1>
          </center>
          <hr />
          <label>Firstname:</label>
          <input type="text" name="firstname" placeholder="Firstname" size="15" required />
          <label>Middlename:</label>
          <input type="text" name="middlename" placeholder="Middlename" size="15" required />
          <label>Lastname:</label>
          <input type="text" name="lastname" placeholder="Lastname" size="15" required />
          <div />
          <label>Course:</label>
          <select>
            <option value="Course">Course</option>
            <option value="BCA">BCA</option>
            <option value="BBA">BBA</option>
            <option value="B.Tech">B.Tech</option>
            <option value="MBA">MBA</option>
            <option value="MCA">MCA</option>
            <option value="M.Tech">M.Tech</option>
          </select>
          <div />
          <div />
          <label>Gender:</label><br />
          <input type="radio" value="Male" name="gender" defaultChecked /> Male
          <input type="radio" value="Female" name="gender" /> Female
          <input type="radio" value="Other" name="gender" /> Other
          <div />
          <label>Phone:</label>
          <input type="text" name="country code" placeholder="Country Code" value="+91" size="2" />
          <input type="text" name="phone" placeholder="phone no." size="10" required />
          Current Address:
          <textarea cols="80" rows="5" placeholder="Current Address" required>
          </textarea>
          <label htmlFor="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" required />
          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />
          <label htmlFor="psw-repeat"><b>Re-type Password</b></label>
          <input type="password" placeholder="Retype Password" name="psw-repeat" required />
          <button type="submit" className="registerbtn">Register</button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
