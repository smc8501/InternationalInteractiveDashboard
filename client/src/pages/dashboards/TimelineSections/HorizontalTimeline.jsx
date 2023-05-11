import "./horizontalTimeline.css";
import { Link } from "react-router-dom";
function HorizontalTimeline() {
    return (
    
            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-item-content">
                    <div className="timeline-item-info">
                        <Link to="/applicationform"><h2>Application Form</h2></Link>
                    </div>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-item-content">
                    <div className="timeline-item-info">
                        <h2>Unconditional/Conditional Letter</h2>
                    </div>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-item-content">
                    <div className="timeline-item-info">
                        <Link to="/initialdepositpayment"><h2>Initial Deposit Payment</h2></Link>
                    </div>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-item-content">
                    <div className="timeline-item-info">
                        <h2>Pre-CAS Interview</h2>
                    </div>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-item-content">
                    <div className="timeline-item-info">
                        <h2>CAS Letter</h2>
                    </div>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-item-content">
                    <div className="timeline-item-info">
                        <h2>VISA</h2>
                    </div>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-item-content">
                    <div className="timeline-item-info">
                        <h2>Next Steps</h2>
                    </div>
                    </div>
                </div>
            </div>

    );
}



export default HorizontalTimeline;
