import React from 'react'; 
import  './btn.css';
import Animation from './orb.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsymmetrik } from "@fortawesome/free-brands-svg-icons";
 
export default function Start({ sendData}) { 
  return (
    
<div style={{ position: "relative", width: "100%", height: "100vh" }}>
  {/* 🔹 Background Animation */}
  <div
    className="animation-bg"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 0,
      pointerEvents: "auto", // hover detect kare
    }}
  >
    <Animation /> {/* yahaan tumhara background animation component */}
  </div>

  {/* 🔹 Start.js ka Content */}
  <div
    style={{
      position: "relative",
      zIndex: 1,
      color: "white",
      pointerEvents: "auto", // content clickable + visible
    }}
  >
   <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
     <div
      className="navbar"
      style={{
        backdropFilter: "blur(5px)",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: "10px",
        marginTop: "20px",
        width: "50%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        height: "40px",
        borderRadius:"30px"
      }}
    >
      <div className="nav-left">
       <p style={{fontSize:"21px"}}><FontAwesomeIcon icon={faAsymmetrik} style={{ color: "white" }} /> Track Job</p>
      </div>
      <div
        className="nav-right"
        style={{ display: "flex", gap: "10px" }}
      >
        <button
          className="login-btn"
          style={{
            width: "100px",
            height: "40px",
            backgroundColor: "white",
            color: "black",
            border: "none",
            borderRadius: "30px",
            fontSize: "17px",
          }}
        >
          Login
        </button>
        <button
          className="signup-btn"
          style={{
            width: "100px",
            height: "40px",
            backgroundColor: "white",
            color: "black",
            border: "none",
            borderRadius: "30px",
            fontSize: "17px",
          }}
        >
          Sign Up
        </button>
      </div>
    </div>
   </div>

    <div
      className="hero"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "50px" }}>Job Tracker Application</h1>
      <p style={{ fontSize: "15px", marginTop: "-30px",color:"rgb(205, 202, 202)" }}>
        Manage your Jobs in a professional way
      </p>
      <button className="btn" onClick={() => sendData(true)}>
        Dashboard
      </button>
    </div>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "30px",
        fontSize: "12px",
        marginTop: "50px",
      }}
    >
      <p>® All Right Reserved</p>
    </div>
  </div>
</div>

  )
}
 

 
