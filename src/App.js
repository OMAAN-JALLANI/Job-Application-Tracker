import React, { useState, useEffect } from "react";
import "./App.css";
import Start from "./Components/Start";
import Dashboard from "./Components/Dashboard";
import Forms from "./Components/Form";
import Orb from "./Components/orb.js";
import ClickSpark from './Components/Spark_click'; 

function App() {
  const [dashboard, setDashboard] = useState(false);
  const [Form, setForm] = useState(false);
  const [newjob, setNewjob] = useState([]);

  // 🧠 Handlers
  const handleData = (value) => setDashboard(value);
  const handleform = (value) => {
    setForm(value);
    setDashboard(false);
  };
  const cancel = (value) => {
    setForm(value);
    setDashboard(true);
  };
  const Goback = (value) => {
    setDashboard(value);
    setForm(false);
  };

  const jobdetail = (data) => {
    setNewjob(data);
    console.log("New Job Added:", data);
  };

  useEffect(() => {
    console.log("Jobs updated:", newjob);
  }, [newjob]);

  return (
    <div>
      <ClickSpark
  sparkColor='#fff'
  sparkSize={10}
  sparkRadius={15}
  sparkCount={8}
  duration={400}
> 
      <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      {/* 🔵 Background Animation Layer */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          zIndex: 0,
        }}
      >
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>

      {/* ⚪ Foreground UI Layer (clickable) */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "white",
          pointerEvents: "auto", // 👈 ab buttons clickable hain
        }}
      >
        {!dashboard && !Form && <Start sendData={handleData} />}

        {dashboard && !Form && (
          <Dashboard
            addjob={handleform}
            backStart={Goback}
            enterjobdata={newjob}
          />
        )}

        {Form && <Forms back={cancel} jobdata={jobdetail} />}
      </div>
    </div>
    </ClickSpark>
    </div>
  );
}

export default App;
