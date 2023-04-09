import {useLocation, useNavigation} from 'react-router-dom';

function IntStudentDashboard() {

    const location = useLocation();
    return (
        <div className="IntStudentDash">
            <h1>Welcome {location.state.id} to your dashboard</h1>
        </div>
    )
}

export default IntStudentDashboard;