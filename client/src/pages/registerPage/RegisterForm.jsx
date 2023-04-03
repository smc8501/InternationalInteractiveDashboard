import FormInput from "../Components/FormInput";

export default RegisterForm;
function RegisterForm() {
    return(
        <div className="container">
            <form action="#" method="GET">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr></hr>
            <FormInput placeholder="First Name"/>
            <FormInput placeholder="LastName"/>
            <FormInput placeholder="Email"/>
            <FormInput placeholder="Password"/>
            <FormInput placeholder="Repeat Password"/>
            </form>
        </div>
    );
}