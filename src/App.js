import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import "./App.css";
import About from "./pages/About";
import Login from "./pages/Login";

function App() {
  return (
  <div className="App">
    <Router>
      <Navbar/> 
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/login' component={Login} />
        </Switch>
        <Footer/>
    </Router>
  </div>
  );
}

export default App;
