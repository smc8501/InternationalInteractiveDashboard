import FormInput from "../Components/FormInput";
import {useNavigate, Link} from "react-router-dom";
import { useState } from "react";


function RegisterForm() {
    const history=useNavigate();
    // Handling multiple inputs into the form, what is typed can later be seen in the developer tools in google.
    const [registerValues, setRegisterValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        rptPassword: "",
    });
    // Creating like a python dictionary but in JSON.
    const registerInputs = [
        {
            id:1,
            name:"firstname",
            type:"text",
            placeholder:"First Name",
            label:"First Name",
            required: true
        },
        {
            id:2,
            name:"lastname",
            type:"text",
            placeholder:"Last Name",
            label:"Last Name",
            required: true
        },
        {
            id:3,
            name:"username",
            type:"text",
            placeholder:"Username",
            errorMessage:
            "Username should be 3-16 characters and should not include any special character!",
            label:"Username",
            pattern: `^[A-Za-z0-9]{3,16}$`,
            // Cannot display error message.
            required: true
        },
        {
            id:4,
            name:"email",
            type:"email",
            placeholder:"Email",
            errorMessage:"It should be a valid email address.",
            label:"Email",
            required: true
        },
        {
            id:5,
            name:"password",
            type:"password",
            placeholder:"Password",
            errorMessage:"Password should be 8-20 characters and include at least 1 letter and 1 number.",
            label:"Password",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%6&*]{8,20}$`,
            required: true
        },
        {
            id:6,
            name:"rptPassword",
            type:"password",
            placeholder:"Confirm Password",
            errorMessage:"Passwords do not match!",
            label:"Confirm Password",
            pattern: registerValues.password,
            required:true
        }
    ]
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        console.log(Object.fromEntries(data.entries()));
    }
    const onChange = (e) => {
        setRegisterValues({...registerValues, [e.target.name]: e.target.value})
    };
    console.log(registerValues);
    return(
        <div className="container">
            <form onSubmit={handleSubmit} action="POST">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr></hr>
                {registerInputs.map((input) => (
                    <FormInput key={input.id} {...input} onChange={onChange}/>
                ))}
            <button type="submit">Register</button>
            <p>Already have an account? Log in <Link to="/loginform">here</Link></p> 
            {/* Link in line 22 not working */}
            </form>
        </div>
    );
}
export default RegisterForm;