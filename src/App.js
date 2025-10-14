import React from "react";
import "./App.css";
import { useState,useEffect } from "react";
import Start from "./Components/Start";
import Dashboard from "./Components/Dashboard";
import Forms from "./Components/Form";
function App() {
  const [dashboard, setDashboard] = useState(false); //true krna hn... after creating dashboard
  const [Form, setForm] = useState(false); //false krna hn... after creating form
  const [newjob , setNewjob] = useState([]);
  const handleData = (value) => {
    setDashboard(value);
  };
  const handleform = (value) => {
    setForm(value);
    setDashboard(false);
  };
  const cancel = (value) => {
    setForm(value);
    setDashboard(true);
  };
  useEffect(() => {
    //console.log("Jobs updated:", newjob);
  }, [newjob]);
  const jobdetail =(data)=>{  
    setNewjob(data);
    console.log(newjob);
  } 
   const Goback=(value)=>{
    setDashboard(value);
    setForm(false);
   }
  return (
    <div>
      
      {!dashboard && !Form && <Start sendData={handleData} />}
      {dashboard && !Form && <Dashboard addjob={handleform} backStart={Goback} enterjobdata={newjob}/>}
      {Form && <Forms back={cancel} jobdata={jobdetail} />}
    </div>
  );
}

export default App;