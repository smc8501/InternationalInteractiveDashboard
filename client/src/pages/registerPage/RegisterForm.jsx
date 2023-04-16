// import FormInput from "../Components/FormInput";
import {useNavigate, Link} from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import { TextField, Button } from '@mui/material';
import './registerForm.css';

function RegisterForm() {
    const history=useNavigate();
    // Handling multiple inputs into the form, what is typed can later be seen in the developer tools in google.
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const errormessage="";

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
            <div className="container-left">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr></hr>
            </div>
            <div className="container-right">
                <form onSubmit={handleSubmit} action="POST">
                    {/* {registerInputs.map((input) => (
                    <FormInput key={input.id} {...input} onChange={onChange}/>
                    ))} */}
                    <TextField label="First Name" onChange={(e) => { setFirstName(e.target.value) }} id="firstName" size="small" margin="dense"required/><br></br>
                    {/* <input type="text" onChange={(e) => { setFirstName(e.target.value) }} placeholder="First Name" id="firstName" required/><br></br>  */}
                    <TextField label="Last Name" onChange={(e) => { setLastName(e.target.value) }} id="lastName" size="small" margin="dense"required/><br></br>
                    {/* <input type="text" onChange={(e) => { setLastName(e.target.value) }} placeholder="Last Name" id="lastName" required/><br></br> */}
                    <TextField label="Username" onChange={(e) => { setUsername(e.target.value) }} id="username" size="small" margin="dense"pattern={`^[A-Za-z0-9]{3,16}$`} required/><br></br>
                    {/* <input type="text" onChange={(e) => { setUsername(e.target.value) }} placeholder="Username" errormessage="Username should be 3-16 characters and should not include any special character!" pattern={`^[A-Za-z0-9]{3,16}$`} id="username" required/><br></br><span>{errormessage}</span> */}
                    <TextField label="Email" onChange={(e) => { setEmail(e.target.value) }} id="email" size="small" margin="dense" required/><br></br>
                    {/* <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" errormessage="Input a valid email" id="email" required/><br></br><span>{errormessage}</span> */}
                    <TextField label="Password" type="password" onChange={(e) => { setPassword(e.target.value) }} size="small" margin="dense" pattern={`^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%6&*]{8,20}$`} id="password" required/><br></br>
                    {/* <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" errormessage="Password should be 8-20 characters and include at least 1 letter and 1 number." pattern={`^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%6&*]{8,20}$`} id="password" required/><br></br><span>{errormessage}</span> */}
                    <TextField label="Confirm Password"type="password" size="small" margin="dense"pattern={password}required/><br></br>
                    {/* <input type="password" placeholder= "Confirm Password" errormessage="Passwords do not match" pattern={password} required/><br></br><span>{errormessage}</span> */}
                    <Button variant="contained">Register</Button>
                    {/* <button type="submit">Register</button> */}
                    <p>Already have an account? Log in <Link to="/loginform">here</Link></p> 
                </form>
            </div>
        </div>
    );
}
export default RegisterForm;