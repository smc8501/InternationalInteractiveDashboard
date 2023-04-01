import PasswordField from '../../pages/Components/PasswordField.jsx';

export default RegisterForm;
function RegisterForm() {
    return(
        <form action="#">
            <div class="container">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr></hr>
                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" id="email" required></input>

                    <PasswordField />

                    <label for="psw-repeat"><b>Repeat Password</b></label>
                    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat"></input>
            
            </div>
            
        </form>
    );
}