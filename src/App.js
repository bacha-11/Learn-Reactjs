import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { Logout } from './Logout';
import User from './User';
import Home from './Home';
import ClassCom from './ClassCom';
import { useState } from 'react';
import GetFormData from './GetFormData';
import Condition from './IfElse';
import Constructor from './Constructor';
import ComponentDidMountExample from './ComponentDidMount';
import ComponentDidUpdateExample from './ComponentDidUpdate';



function App() {
  let [name, setname] = useState('ijaz')
  let [email, setemail] = useState('ijaz@z.com')
  return (
    <div className="App">
      <h1>Hello guest</h1>

      <button onClick={() => {
        setname('bacha')
        setemail('bacha@z.com')
      }}> Click Me </button>

      <Login name={name} email={email} other={{address:'abc', phone:'1111'}}/>

      <Home /><br/><br />

      <User /><br /><br />

      <GetFormData /><br /><br />

      <Condition /><br /><br />


      <Constructor data={'abc'}/><br /><br />

      <ComponentDidMountExample /><br /><br />

      <ComponentDidUpdateExample />


    </div>
  );
}


export default App;
