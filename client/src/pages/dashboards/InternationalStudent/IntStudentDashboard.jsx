
import { useLocation, useNavigate, Link} from 'react-router-dom';
import { Container, Grid, Box } from '@mui/material';
import SideNavBar from '../../Components/SideNavBar';

import './intStudentDashboard.css';
import HorizontalTimeline from '../TimelineSections/HorizontalTimeline';

function IntStudentDashboard() {
    const location = useLocation();
    return (
        <Container maxWidth="lg">
            {/* <SideNavBar/> */}
            <Grid container spacing={2}>
                <Grid item xs={30}>
                    {/* Welcome Banner */}
                    <Box sx={{
                        width: 1200,
                        height: 150,
                        backgroundColor: '#3f51b5',
                        borderRadius: '20px',
                    }}>
                        <h1 style={{color: '#ffffff', float: 'left', marginTop: '50px', marginLeft: '50px'}}>
                            Welcome {location.state.id} to your dashboard</h1>
                    </Box>
                </Grid>
                <Grid item xs={30}>
                    {/* Timeline section */}
                    <Box sx={{
                        width: 1200,
                        height: 300,
                        backgroundColor: '#ffffff',
                        borderRadius: '20px',
                    }}>
                        <h1 style={{marginLeft: '20px'}}>Your progress</h1>
                        <HorizontalTimeline />
                    </Box>
                </Grid>
                <Grid item xs={30}>
                    {/* Upcoming Deadlines section */}
                    <Box sx={{
                        width: 1200,
                        height: 150,
                        backgroundColor: '#ffffff',
                        borderRadius: '20px',
                        marginTop: '10px',
                    }}>
                        <h1 style={{marginLeft: '20px'}}>Upcoming Deadlines</h1>
                    </Box>
                </Grid>
                <Grid item xs={20}>
                    <button type="button" style={{height: '50px', marginLeft: '950px'}}>Chat with us!</button>
                </Grid>
            </Grid>
        </Container>
    )
}
export default IntStudentDashboard;