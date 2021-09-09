import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { Logout } from './Logout';
import User from './User';
import Home from './Home';
import ClassCom from './ClassCom';
import { useState } from 'react';



function App() {
  let [data, setdata] = useState(0)

  function app2()
  {
    setdata(data+1)
  }
    
  return (
      <div className="App">
        <h1>{data}</h1>
        <button onClick={app2}> Click Me </button>
        <Login />
      </div>
    );
}


export default App;
