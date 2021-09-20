import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { Logout } from './Logout';
import User from './User';
import Home from './Home';
import ClassCom from './ClassCom';
import { Fragment, PureComponent, useState } from 'react';
import GetFormData from './GetFormData';
import Condition from './IfElse';
import Constructor from './Constructor';
import ComponentDidMountExample from './ComponentDidMount';
import ComponentDidUpdateExample from './ComponentDidUpdate';
import ShouldComponentUpdateExample from './ShouldComponentUpdate';
import ComponentWillUnMountExample from './ComponentWillUnmount';
import UseStateHook from './UseStateHook';
import UseEffectHook from './UseEffectHook';
import { Button } from 'react-bootstrap';
import ArrayObject from './ArrayObject';
import Fragments from './Fragment';
import LIftingStateUp from './LiftingStateUp';
import PureComponents from './PureComponent'
import UseMemoHook from './UseMemoHook';
import Ref from './Ref';
import UseRefHook from './UseRefHook';
import Display from './HighOrderComponent';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import PageNotFound from  './PageNotFound'
import Employees from './Employies';
import FetchApi from './FetchApi';
import FetchApiUserView from './FetchApiUserView';
import PostApiMethod from './PostApiMethod';
import GetPreviousState from './getPreviousState';




function App() {

  const employies = [
    {id:1, name:'ijaz', email:'ijaz@test.com', age:10},
    {id:2, name:'zaid', email:'zaid@test.com', age:20},
    {id:3, name:'nisar', email:'nisar@test.com', age:30},
    {id:4, name:'tariq', email:'tariq@test.com', age:40}
]


  let [name, setname] = useState('ijaz')
  let [email, setemail] = useState('ijaz@z.com')
  let [show, setshow] = useState(true)

  function getChildData(props){
    alert("Yah I Got It "+ props)
  }


  return (
    <Router>
    <div className="App">
    <Link to='/'>Home</Link><br></br>
    <Link to='/user'>User</Link><br></br>
    <Link to='/fetchapi'>FetchApi</Link><br></br>
    <Link to='/prev'>Previous State</Link><br></br>
    <Link to='/postApiMethod'>postApiMethod</Link><br></br>
    {
      employies.map((item)=>
      <div><Link to={'/employee/'+item.id+"/"+item.name}><h3>{item.name}</h3></Link></div>
      )
    }
    <Switch>
      <Route path='/' exact component={Home}></Route>
      <Route path='/user' exact component={User}></Route>
      <Route path='/fetchapi' exact component={FetchApi}></Route>
      <Route path='/prev' exact component={GetPreviousState}></Route>
      <Route path='/postApiMethod' exact component={PostApiMethod}></Route>
      <Route path='/employee/:id/:name' exact component={Employees}></Route>
      <Route path='/user/:id' exact component={FetchApiUserView}></Route>
      <Route path="*" exact component={PageNotFound}></Route>
    </Switch>

      {/* <h1>Hello guest</h1>

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

      <ComponentDidUpdateExample /><br /><br />

      <ShouldComponentUpdateExample /><br /><br />


      {
      show?
      <ComponentWillUnMountExample />
      :<h1>compontent is been removed</h1>
      }

      <Button onClick={()=>{setshow(!show)}}>toggle</Button>

      <UseStateHook /><br /><br />

      <UseEffectHook /><br /><br />

      <ArrayObject /><br /><br />

      <Fragments /><br /><br />

      <LIftingStateUp  data={getChildData}/><br /><br />

      <PureComponents /><br /><br />

      <UseMemoHook /><br /><br />

      <Ref /><br /><br />

      <UseRefHook /><br /><br />

      <Display />
       */}
      


    </div>
    </Router>
  );
}


export default App;
