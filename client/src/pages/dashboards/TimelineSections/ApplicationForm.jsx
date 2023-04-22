import { useNavigate } from 'react-router-dom'
import axios from "axios";
function ApplicationForm() {
    const history=useNavigate();
    const onOptionChangeHandler = (e) => {
        console.log("User Selected Value - ", e.target.value);

    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await axios.post("http://localhost:4000/applicationform", );
    //     }
    // }
    

    return (
        <div className="container">
            <div className="CourseDetails">
                <h1>1. Course Details</h1><br></br>
                <label>Please select a Course</label><br></br>
                <select onChange={onOptionChangeHandler}className="CourseOptions" name="courseOptions" defaultValue={'DEFAULT'}>
                    <option value="DEFAULT" disabled selected>Select</option>
                    <option value="1">BSc Computer Science</option>
                    <option value="2">BSc Food Science</option>
                    <option value="3">Anthropology</option>
                </select>
            </div>
            <div className="PersonalInfo">
                <h1>2. Personal Information</h1><br></br>
                <label>Title</label><br></br>
                <select defaultValue={'DEFAULT'}>
                    <option value="DEFAULT" disabled selected>Select</option>
                    <option value="1">Mr</option>
                    <option value="2">Mrs</option>
                    <option value="3">Miss</option>
                    <option value="4">Ms</option>
                    <option value="5">Mx</option>
                    <option value="6">Sir</option>
                    <option value="7">Dame</option>
                    <option value="8">Dr</option>
                    <option value="9">Cllr</option>
                    <option value="10">Lady</option>
                    <option value="11">Lord</option>
                </select>
                <label>First Name</label><br></br>
                <input type="text" required/><br></br>
                <label>Last Name</label><br></br>
                <input type="text" required/><br></br>
                <label>Country</label><br></br>
                <input type="text" required/><br></br>
                <label>Street Address</label><br></br>
                <input type="text" required/><br></br>
                <label>Postcode / Zip</label><br></br>
                <label>Email</label><br></br>
                <input type="text" required/><br></br>
                <label>Mobile Phone</label><br></br>
                <input type="text" required/><br></br>
                <label>Other Contact Number</label><br></br>
                <input type="text" required/><br></br>
                <label>Gender</label><br></br>
                <select defaultValue={'DEFAULT'}>
                    <option value="DEFAULT">Select</option>
                    <option value="1">Female</option>
                    <option value="2">Male</option>
                    <option value="3">Other</option>
                </select>
                <label>Date of Birth</label><br></br>
                <input type="date" required/><br></br>
                <label>Nationality</label><br></br>
                <input type="text" required/><br></br>
                <label>Country of Residence</label><br></br>
                <input type="text" required/><br></br>
                <label>Country of Birth</label><br></br>
                <input type="text" required/><br></br>
                <label>Have you previously applied to Student University via UCAS?</label><br></br>
                <input type="radio" name="yesNoOption" value="Yes"/>
                <label>Yes</label>
                <input type="radio" name="yesNoOption" value="No"/>
                <label>No</label><br></br>
                <hr></hr>
                <p><b>Studen University welcomes students with diabilities and special needs. Is there anything you would like to make us aware of to fully accommodate you? Please select where appropriate.</b></p><br></br>
                <p>By disclousing a disability, Student University can contact you to make sure you have the support you need for your studies. This information is not used for the purpose of accessing your application to study.</p><br></br>
                <select defaultValue={'DEFAULT'}>
                    <option value="DEFAULT">No known Disability</option>
                    <option value="1">Yes I have a disability</option>
                </select><br></br>
                <label><b>Please state any special needs ot support required as a consequence of any disability or medical condition</b></label><br></br>
                <textarea rows="20" cols="30"></textarea><br></br>
                <label><b>Have you applied or studied at Student Universitu before?</b></label><br></br>
                <input type="radio" name="yesNoOptions" value="Yes"/><br></br>
                <label>Yes</label>
                <input type="radio" name="yesNoOptions" value="No"/><label></label><br></br>
                <label>No</label><br></br>
                <label><b>If YES please state for which course, when and the outcome.</b></label>
                <textarea rows="20" cols="30"></textarea>
                <label>How will your fees will be paid?</label>
                <select defaultValue={'DEFAULT'}>
                    <option value="DEFAULT">Select</option>
                    <option value="1">Erasmus</option>
                    <option value="2">As a Visa student</option>
                </select>
            </div>
            <div className="Qualifications">
                <h1>3. Qualifications</h1>
                <p>You will need to complete all the fields as stated using the exact information on your certificates and you must include the country where they were taken.</p><br></br>
                <p>Please DO NOT enter what you think is the UK equivalent og your OVERSEAS Qualifications</p><br></br>
                <h2><b>English Language</b></h2><br></br>
                <p>Please choose an accredited English Language course you have already taken together with the score/grade achieved. If you have not taken a test yet plese choose To be taken/undecided from the list.</p><br></br>
                <label><b>Awarding Body</b></label><br></br>
                <select defaultValue={'Select'}>

                    <option value="1">To be taken/undecided</option>
                    <option value="2">ELTs</option>
                </select><br></br>
                <label>Language test date</label><br></br>
                <input type="date" required/><br></br>
                <label><b>Personal Statement</b></label><br></br>
                <textarea rows="255" cols="255"></textarea><br></br>
                <label><b>References and Curriculum Vitae/Resume</b></label><br></br>
            </div>
            <button type="button">Submit</button>
        </div>
    );
}

export default ApplicationForm;