
import FormInput from "../Components/FormInput";


function LoginForm() {
    return (

        <div className="Container">
            <form action="#" method="POST">
                <FormInput placeholder="Username" />
                <FormInput placeholder="Password"/>
                <button type="submit">Login</button>
                <label>
                    <b>Remember me</b>
                    <input type="checkbox" checked="checked" name="remember"/>
                </label>
            </form>
        </div>

    );
}

export default LoginForm;