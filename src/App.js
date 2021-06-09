import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export const UserContext=createContext()

function App() {
  const [id,setId]=useState(false)
  return (
    <div className="App">
      <UserContext.Provider value={[id,setId]}>
    <Router> 
      <Switch>
        <Route exact path="/">
            <Home></Home>
        </Route>
          <Route path="/home">
            <Home></Home>
          </Route>

        </Switch>
    </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
