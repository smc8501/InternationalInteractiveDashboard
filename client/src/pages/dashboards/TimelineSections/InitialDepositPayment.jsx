import {Container, Grid} from '@mui/material';
import './initialDepositPayment.css';


function InitialDepositPayment() {
    return(
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={30}>
                   {/* <input type="file" name="fileInput" onChange={handleFileInputChange}></input> */}
                    <button type="button">Upload Swift Copy</button>
                </Grid>
            </Grid>
        </Container>
    );
}
export default InitialDepositPayment;


 // const handleFileInputChange = (e) => {
    //     const file = e.target.files[0];
    //     const formData = new FormData();
    //     formData.append("file", file);

    //     axios.post("/initialdepositpayment", formData)
    //     .then((res) => {
    //         console.log(res.data);
    //     })
    //     .catch((err) => {
    //         console.error(err);
    //     })
    // };