import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { Logout } from './Logout';
import User from './User';
import Home from './Home';
import ClassCom from './ClassCom';
import { useState } from 'react';



function App() {
  let [name, setname] = useState('ijaz')
  let [email, setemail] = useState('ijaz@z.com')
  return (
    <div className="App">
      <h1>Hello World</h1>
      <button onClick={() => {
        setname('bacha')
        setemail('bacha@z.com')
      }}> Click Me </button>
      <Login name={name} email={email} />
    </div>
  );
}


export default App;
