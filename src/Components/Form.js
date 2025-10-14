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
    borderBottom: "2px solid #555",
    width: "100%",
    fontSize: "16px",
    padding: "6px 5px",
    backgroundColor: "transparent",
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
    color: "#2f2f2f",
  };

  const iconStyle = {
    color: "#323131",
    marginRight: "10px",
  };

  return (
    <div style={{ fontFamily: "Inter, sans-serif", backgroundColor: "#f8f8f8", minHeight: "100vh", paddingTop: "20px" }}>
      <div
        style={{
          textAlign: "center",
          color: "#2f2f2f",
          marginBottom: "20px",
        }}
      >
        <h1 style={{ fontSize: "42px", letterSpacing: "1px" }}>
          <FontAwesomeIcon icon={faPen} style={{ color: "#323131", fontSize: "40px" }} /> ADD NEW JOB
        </h1>
      </div>

      <div
        style={{
          backgroundColor: "white",
          width: "55%",
          margin: "auto",
          borderRadius: "12px",
          padding: "40px 60px",
          boxShadow: "0px 5px 20px rgba(0,0,0,0.1)",
        }}
      >
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

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <button
          onClick={Savedata}
          style={{
            height: "43px",
            width: "130px",
            backgroundColor: "#323131",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "17px",
            fontWeight: "500",
            cursor: "pointer",
            transition: "0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#505050")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#323131")}
        >
          <FontAwesomeIcon icon={faSave} /> Save
        </button>

        <button
          onClick={() => back(false)}
          style={{
            height: "43px",
            width: "130px",
            backgroundColor: "white",
            color: "#323131",
            border: "2px solid #323131",
            borderRadius: "8px",
            fontSize: "17px",
            fontWeight: "500",
            cursor: "pointer",
            transition: "0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#323131", e.target.style.color = "white")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "white", e.target.style.color = "#323131")}
        >
          <FontAwesomeIcon icon={faCancel} /> Cancel
        </button>
      </div>
    </div>
  );
}
