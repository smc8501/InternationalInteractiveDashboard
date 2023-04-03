
import './formInput.css';
function FormInput(props) {
    return (
        <div class="formInput">
            <input placeholder={props.placeholder} />
        </div>
    );
}

export default FormInput;