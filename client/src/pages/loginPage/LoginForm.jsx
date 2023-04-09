
import FormInput from "../Components/FormInput";
import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import axios from "axios"


function LoginForm() {
    const history=useNavigate();
    const [loginValues, setLoginValues] = useState({
        username: "",
        password: "",
    });

    const loginInputs = [
        {
            id:1,
            name:"username",
            type:"text",
            placeholder:"Username",
            errorMessage:"Incorrect Username.",
            label:"username"
        },
        {
            id:2,
            name:"password",
            type:"password",
            placeholder:"password",
            errorMessage:"Incorrect Password.",
            label:"password"
        }
    ]
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        try {
            await axios.post("http://localhost:4000/",
                data.entries()
            )
            .then(res=>{
                if(res.data==="exist") {
                    // alert("User already exists")
                    history("/InternationalStudentDashboard",{state:loginInputs.name} )
                }
                else if(res.data==="doesn't exist") {
                    alert("User has not registered");
                }
            })
            .catch(e=> {
                alert("wrong details")
                console.log(e);
            })
        } catch (error) {
            console.log(e);
        }
        console.log(Object.fromEntries(data.entries()));
    }
    const onChange = (e) => {
        setLoginValues({...loginValues, [e.target.name]: e.target.value});
    }
    return (

        <div className="Container">
            <form onSubmit={handleSubmit} >
                <h1>Log In</h1>
                <p>Please log in to continue your university application with us.</p>
                <hr></hr>
                {loginInputs.map((input) => (                
                    <FormInput key={input.id} {...input} onChange={onChange}/>
                ))}
                <button type="submit">Login</button>
                <label>
                    <b>Remember me</b>
                    <input type="checkbox" name="remember"/>
                </label>
                <p>Don't have an account? Register <Link to="/registerform">here</Link></p> 
            </form>
        </div>

    );
}

export default LoginForm;