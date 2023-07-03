
import './App.css';
import Header from './MyComponents/Header';
import  Footer  from './MyComponents/Footer';

import Todos from "./MyComponents/Todos";
import React,{useState} from 'react';
import Profile from './MyComponents/Profile';
import EmploymentHistory from './MyComponents/EmploymentHistory';
import Education from './MyComponents/Education';

function App() {

 const onDelete =(todo)=>
  {
console.log("i am on delete",todo);
setTodos(todos.filter((e)=>{
  return e!=todo;
}))
// alert("hit hit");
  }
  const [todos,setTodos]=useState([
    {
      sno:1,
      title:"Go to the market",
      desc:"you need to go to the market"
    
    },
    {
      sno:2,
      title:"Go to the mall",
      desc:"you need to go to the mall"

    },
    {
    sno:3,
    title:"Go to the street",
    desc:"you need to go to the street"
  }
  ])
  return (
   
    <div>
    <Header title="Pardeep Singh" searchbar={true}/>
    <Profile/>
    
    <EmploymentHistory/>
    <Education/>
    {/* <Todos todos={todos} onDelete={onDelete}/> */}
    <Footer/>
    </div>
  );
}

export default App;
