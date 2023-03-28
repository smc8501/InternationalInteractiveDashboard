// Any jsx or css files that need to be linked here have to be imported.

import './App.css';
import TimelinePoint from './timeline/TimelinePoint.jsx';
import RegisterForm from './registerPage/RegisterForm.jsx';

function App() {
  return (
    <div className="App">
      {/* This is the entry point for the frontend */}
      <h1>International Interactive Dashboard</h1>
      {/* <TimelinePoint /> */}
      <RegisterForm />
    </div>
  );
}

export default App;
