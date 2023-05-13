import "./horizontalTimeline.css";
import { Link } from "react-router-dom";
import { useState } from 'react';


function HorizontalTimeline() {
  const [activeDot, setActiveDot] = useState(0);

  const handleClick = (index) => {
    setActiveDot(index);
  };

  return (
    <div className="timeline">
      <div className="timeline-line" style={{ width: `${activeDot * 33}%` }}></div>
      <div className="timeline-item" onClick={() => handleClick(0)}>
        <div className={`timeline-dot ${activeDot === 0 ? 'active' : ''}`}></div>
        <div className="timeline-item-info">
          <Link to="/applicationform"><h2>Application Form</h2></Link>
        </div>
      </div>
      <div className="timeline-item" onClick={() => handleClick(1)}>
        <div className={`timeline-dot ${activeDot === 1 ? 'active' : ''}`}></div>
        <div className="timeline-item-info">
          <h2>Unconditional/Conditional Offer Letter</h2>
        </div>
      </div>
      <div className="timeline-item" onClick={() => handleClick(2)}>
        <div className={`timeline-dot ${activeDot === 2 ? 'active' : ''}`}></div>
        <div className="timeline-item-info">
          <Link to="/initialDepositPayment"><h2>Initial Deposit Payment</h2></Link>
        </div>
      </div>
      <div className="timeline-item" onClick={() => handleClick(2)}>
        <div className={`timeline-dot ${activeDot === 2 ? 'active' : ''}`}></div>
        <div className="timeline-item-info">
          <h2>Pre-CAS Interview</h2>
        </div>
      </div>
      <div className="timeline-item" onClick={() => handleClick(2)}>
        <div className={`timeline-dot ${activeDot === 2 ? 'active' : ''}`}></div>
        <div className="timeline-item-info">
          <h2>CAS Letter</h2>
        </div>
      </div>
      <div className="timeline-item" onClick={() => handleClick(2)}>
        <div className={`timeline-dot ${activeDot === 2 ? 'active' : ''}`}></div>
        <div className="timeline-item-info">
          <Link to="/visainfo"><h2>VISA</h2></Link>
        </div>
      </div>
      <div className="timeline-item" onClick={() => handleClick(2)}>
        <div className={`timeline-dot ${activeDot === 2 ? 'active' : ''}`}></div>
        <div className="timeline-item-info">
          <h2>Next Steps</h2>
        </div>
      </div>
    </div>
  );
}

export default HorizontalTimeline;


    

