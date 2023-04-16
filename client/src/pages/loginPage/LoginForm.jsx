
// import FormInput from "../Components/FormInput";
import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Button } from '@mui/material';
import { Input } from '@mui/joy';
import './loginForm.css';


function LoginForm() {
    const history=useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:4000/loginform", {username, password
        }).then (
            history("/internationalstudentdashboard", {state:{id:username}})
        )
        } catch (error) {
            console.log(error);
        }
    }

    return (

        <div className="Container">
            <form onSubmit={handleSubmit} >
                <div className="container-left">
                    <h1>Log In</h1>
                    <p>Please log in to continue your university application with us.</p>
                    <hr></hr>
                </div>
                <div className="container-right">
                    <Input type="text" placeholder="Username" id="username" onChange={(e) => {setUsername(e.target.value)}} size="sm" required/><br></br>
                    {/* <input type="text" onChange={(e) => {setUsername(e.target.value)}} placeholder="Username" id="username"/><br></br> */}
                    <Input type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}} id="password" size="sm" required/><br></br>
                    {/* <input type="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="Password" id="password"/><br></br> */}
                
                    {/* <button type="submit">Login</button> */}
                    <Button variant="contained">Log In</Button>
                    <label>
                        <b>Remember me</b>
                        <input type="checkbox" name="remember"/>
                    </label>
                    <p>Don't have an account? Register <Link to="/registerform">here</Link></p> 
                </div>
            </form>
        </div>

    );
}

export default LoginForm;