import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
function App() {
  return (
  <Router>
    <Navbar></Navbar>
    <Switch>
      <Route>
        
      </Route>
    </Switch>
  </Router>
  )
}

export default App;
