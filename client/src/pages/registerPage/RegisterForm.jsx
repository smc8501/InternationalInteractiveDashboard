
import "./registerForm.css";
import {useNavigate, Link} from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

function RegisterForm() {
    const history=useNavigate();
    // Handling multiple inputs into the form, what is typed can later be seen in the developer tools in google.
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const errormessage="";

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:4000/registerform", {firstName, lastName, username, email, password
            }).then (
                history("/internationalstudentdashboard", {state:{id:username}})
            )
        } catch (error) {
            console.log(error);
        }

    }
    return(
        <div className="container">
            <form onSubmit={handleSubmit} action="POST">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr></hr>
            <input type="text" onChange={(e) => { setFirstName(e.target.value) }} 
            placeholder="First Name" id="firstName" required/><br></br>
            <input type="text" onChange={(e) => { setLastName(e.target.value) }} 
            placeholder="Last Name" id="lastName" required/><br></br>
            <input type="text" onChange={(e) => { setUsername(e.target.value) }} 
            placeholder="Username" errormessage="Username should be 3-16 characters and should not include any special character!" 
            pattern={`^[A-Za-z0-9]{3,16}$`} id="username" required/><br></br><span>{errormessage}</span>
            <input type="email" onChange={(e) => { setEmail(e.target.value) }} 
            placeholder="Email" errormessage="Input a valid email" 
            id="email" required/><br></br><span>{errormessage}</span>
            <input type="password" onChange={(e) => { setPassword(e.target.value) }} 
            placeholder="Password" errormessage="Password should be 8-20 characters and include at least 1 letter and 1 number." 
            pattern={`^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%6&*]{8,20}$`} 
            id="password" required/><br></br><span>{errormessage}</span>
            <input type="password" placeholder= "Confirm Password" errormessage="Passwords do not match" 
            pattern={password} required/><br></br><span>{errormessage}</span>
            <button type="submit">Register</button>
            <p>Already have an account? Log in <Link to="/loginform">here</Link></p> 
            {/* Link in line 22 not working */}
            </form>
        </div>
    );
}
export default RegisterForm;