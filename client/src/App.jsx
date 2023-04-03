// Any jsx or css files that need to be linked here have to be imported.
import { Outlet, Link } from "react-router-dom";
import './App.css';
function App() {
  return (
    <div class="container">
      <h1>International Student Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Log In</Link>
          </li>
          <li>
            <Link to="/registerform">Register</Link>
          </li>
        </ul>
        <Outlet />
      </nav>
    </div>
  );
}

export default App;
