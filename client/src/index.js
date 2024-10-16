import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginForm from './pages/loginPage/LoginForm';
import RegisterForm from './pages/registerPage/RegisterForm';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import IntStudentDashboard from './pages/dashboards/InternationalStudent/IntStudentDashboard';
import ApplicationForm from './pages/dashboards/TimelineSections/ApplicationForm';
import InitialDepositPayment from './pages/dashboards/TimelineSections/InitialDepositPayment';
import VisaInfo from './pages/dashboards/TimelineSections/VisaInfo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}/>
              <Route index element={<LoginForm />}/>
              <Route path="registerform" element={<RegisterForm />}/>
              <Route path="loginform" element={<LoginForm/>}/>
              <Route path="internationalstudentdashboard" element={<IntStudentDashboard />}/>
              <Route path="applicationform" element={<ApplicationForm />}/>
              <Route path="initialdepositpayment" element={<InitialDepositPayment />}/>
              <Route path="visainfo" element={<VisaInfo />} />
          </Routes>
        </BrowserRouter>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
