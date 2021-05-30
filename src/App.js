import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Home/Login/Login';
export const UserContext = createContext()
function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
  <Router>
    <Switch>
      <Route path="/login">
       <Login></Login>
      </Route>
      <Route exact path="/">
        <Home></Home>
      </Route>
    </Switch>
  </Router>
  </UserContext.Provider>
  )
}

export default App;
