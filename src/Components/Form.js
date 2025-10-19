import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faBuilding,
  faPenNib,
  faSignal,
  faCalendarDays,
  faClipboard,
  faSave,
  faCancel,
} from "@fortawesome/free-solid-svg-icons";

export default function Form({ back, jobdata }) {
  const [company, setCompany] = useState("Google");
  const [title, setTitle] = useState("Frontend Dev.");
  const [status, setStatus] = useState("Applied");
  const [date, setDate] = useState("2025-02-22");
  const [Note, setNote] = useState("This is note");

  const JobDetails = [company, title, status, date, Note];

  const Savedata = () => {
    jobdata(JobDetails);
    back(false);
  };

  const inputStyle = {
    outline: "none",
    border: "none",
    borderBottom: "2px solid rgba(176, 187, 239, 0.6)",
    width: "100%",
    fontSize: "16px",
    padding: "6px 5px",
    backgroundColor: "transparent",
    color: "rgb(235, 235, 236)",
  };

  const sectionStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    marginBottom: "18px",
  };

  const labelStyle = {
    fontSize: "18px",
    fontWeight: "500",
    color: "white",
    letterSpacing: "0.5px",
  };

  const iconStyle = {
    color: "rgb(134, 173, 252)",
    marginRight: "10px",
  };

  return (
    <div
      style={{
        fontFamily: "Inter, sans-serif",
        backgroundColor: "none",
        Height: "500px", 
        color: "white",
      }}
    >
      {/* 🔹 Heading */}
      <div
        style={{
          textAlign: "center",
          color: "white",
          marginBottom: "30px",
        }}
      >
        <h1
          style={{
            marginTop: "0px",
            fontSize: "42px",
            letterSpacing: "1px",
            textShadow: "0 0 12pxrgba(0, 4, 255, 0.33)",
          }}
        >
          <FontAwesomeIcon
            icon={faPen}
            style={{ color: "white", fontSize: "40px" }}
          />{" "}
          ADD NEW JOB
        </h1>
      </div>

      {/* 🔹 Main Form Box */}
      <div
        style={{
          backgroundColor: "rgba(39, 39, 39, 0.32)",
          backdropFilter:"blur(10px)",
          width: "30%",
          margin: "auto", 
          marginTop:"-20px",
          borderRadius: "12px",
          padding: "10px 60px",
          boxShadow: "0px 0px 25px rgba(86, 142, 255, 0.18) ",
          border: "1px solid rgba(86, 142, 255, 0.20)",
        }}
      >
        {/* Inputs */}
        <div style={sectionStyle}>
          <label style={labelStyle}>Company Name:</label>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FontAwesomeIcon icon={faBuilding} style={iconStyle} />
            <input
              type="text"
              placeholder="ELOVO TECHNOLOGIES"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              style={inputStyle}
            />
          </div>
        </div>

        <div style={sectionStyle}>
          <label style={labelStyle}>Job Title:</label>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FontAwesomeIcon icon={faPenNib} style={iconStyle} />
            <input
              type="text"
              placeholder="Frontend Developer"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={inputStyle}
            />
          </div>
        </div>

        <div style={sectionStyle}>
          <label style={labelStyle}>Status:</label>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FontAwesomeIcon icon={faSignal} style={iconStyle} />
            <input
              type="text"
              placeholder="Applied"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              style={inputStyle}
            />
          </div>
        </div>

        <div style={sectionStyle}>
          <label style={labelStyle}>Date:</label>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FontAwesomeIcon icon={faCalendarDays} style={iconStyle} />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              style={{
                ...inputStyle,
                width: "200px",
              }}
            />
          </div>
        </div>

        <div style={sectionStyle}>
          <label style={labelStyle}>Note:</label>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FontAwesomeIcon icon={faClipboard} style={iconStyle} />
            <input
              type="text"
              placeholder="I am applying to gain knowledge"
              value={Note}
              onChange={(e) => setNote(e.target.value)}
              style={inputStyle}
            />
          </div>
        </div>
      </div>

      {/* 🔹 Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          marginTop: "10px",
        }}
      >
        <button
          onClick={Savedata}
          style={{
            height: "35px",
            width: "130px",
            backgroundColor: "rgb(86, 143, 255)",
            color: "black",
            border: "none",
            borderRadius: "8px",
            fontSize: "17px",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 0 10px rgba(86, 142, 255, 0.37)",
            transition: "0.3s",
          }}
          onMouseEnter={(e) => {
            e.target.style.boxShadow = "0 0 20px rgb(86, 143, 255)";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.target.style.boxShadow = "0 0 10px rgb(86, 143, 255)";
            e.target.style.transform = "scale(1)";
          }}
        >
          <FontAwesomeIcon icon={faSave} /> Save
        </button>

        <button
          onClick={() => back(false)}
          style={{
            height: "35px",
            width: "130px",
            backgroundColor: "transparent",
            color: "white",
            border: "2px solid white",
            borderRadius: "8px",
            fontSize: "17px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "0.3s",
            boxShadow: "0 0 8px rgba(86, 142, 255, 0.18)",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "white";
            e.target.style.color = "black";
            e.target.style.boxShadow = "0 0 20px white";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "white";
            e.target.style.boxShadow = "0 0 8px rgba(86, 142, 255, 0.18)";
          }}
        >
          <FontAwesomeIcon icon={faCancel} /> Cancel
        </button>
      </div>
    </div>
  );
}
