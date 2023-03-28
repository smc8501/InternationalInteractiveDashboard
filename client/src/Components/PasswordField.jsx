export default PasswordField;

function PasswordField() {
    return (
        <div class="passwordField">
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" id="psw" required></input>
        </div>
        
        
    );
}