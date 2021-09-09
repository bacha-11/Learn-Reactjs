import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { Logout } from './Logout';
import User from './User';
import Home from './Home';
import ClassCom from './ClassCom';


function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Login />
      <Logout />
      <User />
      <Home />
      <ClassCom />
    </div>
  );
}

export default App;
