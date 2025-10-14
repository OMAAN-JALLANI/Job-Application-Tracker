import React from "react";
import "./btn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {   faArrowLeft,  faPlus, faTable } from "@fortawesome/free-solid-svg-icons";  
export default function Dashboard({ addjob ,backStart,enterjobdata}) { 
  let array=[enterjobdata];
  return (
    <div>
      <div
        className="heading"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100px",
          color: "black",
        }}
      >
        <h1 style={{ fontSize: "45px" }}>
          {" "}
          <FontAwesomeIcon icon={faTable} style={{ color: "#323131" }} />{" "}
          Dashboard
        </h1>
      </div>
      <div
        className="button"
        style={{
          textAlign: "center",
          backgroundColor: "white",
          marginBottom: "5px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "20px",
          width: "88%",
        }}
      >
        <button
        className="bck"
          
          onClick={() => backStart(false)}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="icon" style={{ color: "white" }} />  
        </button>
         <button
        className="add"
          
          onClick={() => addjob(true)}
        >
          <FontAwesomeIcon icon={faPlus} className="icon" style={{ color: "#323131" }} /> Add Job
        </button>
      </div>
      <div
        className="dash-lines"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          height: "70vh",
        }}
      >
        <div>
          <div
            className="Heading-line"
            style={{
              backgroundColor: "#D9D9D9",
              height: "50px",
              width: "1000px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              margin: 0,
               borderRadius:"5px"
            }}
          >
            <div style={{height:"50px",width:"200px",display:"flex",alignItems:"center",justifyContent:"center"}}><h2>DATE</h2></div>
            <div style={{height:"50px",width:"200px",display:"flex",alignItems:"center",justifyContent:"center"}}><h2>DOMAIN</h2></div>
            <div style={{height:"50px",width:"200px",display:"flex",alignItems:"center",justifyContent:"center"}}><h2>COMPANY</h2></div>
            <div style={{height:"50px",width:"200px",display:"flex",alignItems:"center",justifyContent:"center"}}><h2>STATUS</h2></div>
          </div>
        </div>
        <div  
        >
          <div
            className="line1"
            style={{
              backgroundColor: " ",
              height: "50px",
              width: "1000px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              margin: 0,
            }}
          > <div style={{height:"50px",width:"200px",display:"flex",alignItems:"center",justifyContent:"center"}}>  <p>24-07-2025</p></div>
            <div style={{height:"50px",width:"200px",display:"flex",alignItems:"center",justifyContent:"center"}}>  <p>DevOps</p></div>
            <div style={{height:"50px",width:"200px",display:"flex",alignItems:"center",justifyContent:"center"}}>  <p>Rhombix Tech.</p></div>
            <div style={{height:"50px",width:"200px",display:"flex",alignItems:"center",justifyContent:"center"}}>  <p>Applied</p></div>
          </div>
        </div>
        <div  
        >
          <div
            className="line1"
            style={{
              backgroundColor: "#D9D9D9",
              height: "50px",
              width: "1000px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              margin: 0,
              borderRadius:"5px"
            }}
          > <div style={{height:"50px",width:"200px",display:"flex",alignItems:"center",justifyContent:"center"}}>  <p>01-08-2025</p></div>
            <div style={{height:"50px",width:"200px",display:"flex",alignItems:"center",justifyContent:"center"}}>  <p>Backend Dev.</p></div>
            <div style={{height:"50px",width:"200px",display:"flex",alignItems:"center",justifyContent:"center"}}>  <p>Telesonic</p></div>
            <div style={{height:"50px",width:"200px",display:"flex",alignItems:"center",justifyContent:"center"}}>  <p>Waiting...</p></div>
          </div>
        </div>
        <div  
        >
          <div
            className="line1"
            style={{
              backgroundColor: " ",
              height: "50px",
              width: "1000px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              margin: 0,
            }}
          > <div style={{height:"50px",width:"200px",display:"flex",alignItems:"center",justifyContent:"center"}}>  <p>08-08-2025</p></div>
            <div style={{height:"50px",width:"200px",display:"flex",alignItems:"center",justifyContent:"center"}}>  <p>UI/UX</p></div>
            <div style={{height:"50px",width:"200px",display:"flex",alignItems:"center",justifyContent:"center"}}>  <p>Evamps & saanga</p></div>
            <div style={{height:"50px",width:"200px",display:"flex",alignItems:"center",justifyContent:"center"}}>  <p>✅Done</p></div>
          </div>
        </div>
        <div  
        >
          <div
            className="line1"
            style={{
              backgroundColor: "#D9D9D9",
              height: "50px",
              width: "1000px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              margin: 0,
               borderRadius:"5px"
            }}
          > <div style={{height:"50px",width:"200px",display:"flex",alignItems:"center",justifyContent:"center"}}>  <p>14-08-2025</p></div>
            <div style={{height:"50px",width:"200px",display:"flex",alignItems:"center",justifyContent:"center"}}>  <p>DevOps</p></div>
            <div style={{height:"50px",width:"200px",display:"flex",alignItems:"center",justifyContent:"center"}}>  <p>Teraform.tech</p></div>
            <div style={{height:"50px",width:"200px",display:"flex",alignItems:"center",justifyContent:"center"}}>  <p>No response</p></div>
          </div>
        </div>
        <div  
        >
          <div
            className="line1"
            style={{
              backgroundColor: "",
              height: "50px",
              width: "1000px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              margin: 0,
            }}
          > <div style={{height:"50px",width:"200px",display:"flex",alignItems:"center",justifyContent:"center"}}>  <p>11-08-2025</p></div>
            <div style={{height:"50px",width:"200px",display:"flex",alignItems:"center",justifyContent:"center"}}>  <p>Docker</p></div>
            <div style={{height:"50px",width:"200px",display:"flex",alignItems:"center",justifyContent:"center"}}>  <p>Elight container</p></div>
            <div style={{height:"50px",width:"200px",display:"flex",alignItems:"center",justifyContent:"center"}}>  <p>Waiting for interview</p></div>
          </div>
        </div>
        {
        
        array.map((index)=>{ 
          return(
             <div  
        >
          <div
            className="line1"
            style={{
              backgroundColor: " #D9D9D9",
              height: "50px",
              width: "1000px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              margin: 0,
               borderRadius:"5px"
            }}
          > <div style={{height:"50px",width:"200px",display:"flex",alignItems:"center",justifyContent:"center"}}>  <p> {enterjobdata[3]}</p></div>
            <div style={{height:"50px",width:"200px",display:"flex",alignItems:"center",justifyContent:"center"}}>  <p> {enterjobdata[1]}</p></div>
            <div style={{height:"50px",width:"200px",display:"flex",alignItems:"center",justifyContent:"center"}}>  <p> {enterjobdata[0]}</p></div>
            <div style={{height:"50px",width:"200px",display:"flex",alignItems:"center",justifyContent:"center"}}>  <p> {enterjobdata[2]}</p></div>
          </div>
        </div>
          )
        })
        }
      </div>
    </div>
  );
}

 