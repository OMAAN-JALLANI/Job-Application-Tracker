import React from "react";
import "./btn.css";
import "./ElectricBorder.css"; // 🔥 Electric border styling
import ElectricBorder from "./ElectricBorder"; // 🔥 Electric border component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPlus, faTable } from "@fortawesome/free-solid-svg-icons";

export default function Dashboard({ addjob, backStart, enterjobdata }) {
  let array = [enterjobdata];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "none", // background to contrast the electric glow
      }}
    >
      <ElectricBorder
        color="rgb(86, 143, 255)" // neon cyan glow
        speed={1}
        chaos={0.6}
        thickness={2}
        style={{
          borderRadius: "16px",
          padding: "20px",
          width: "90%",
          maxWidth: "1100px",
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 20px rgba(86, 142, 255, 0.21)",
          color: "#f0f0f0",
        }}
      >
        {/* Heading */}
        <div
          className="heading"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100px",
          }}
        >
          <h1
            style={{
              fontSize: "45px",
              color: "rgb(214, 215, 216)",
              textShadow: "0 0 6px rgb(60, 75, 106)",
            }}
          >
            <FontAwesomeIcon icon={faTable} style={{ color: "rgb(225, 228, 232)" }} />{" "}
            Dashboard
          </h1>
        </div>

        {/* Buttons */}
        <div
          className="button"
          style={{
            textAlign: "center",
            marginBottom: "15px",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "20px",
            width: "95%",
          }}
        >
          <button
            className="bck"
            onClick={() => backStart(false)}
            style={{
               backgroundColor: "rgba(39, 56, 91, 0.21)",
              backdropFilter: "blur(10px)",
              border: "none",
              color: "white",
              fontWeight: "600", 
              borderRadius: "8px",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
          <FontAwesomeIcon icon={faArrowLeft} /> 
          </button>

          <button
            className="add"
            onClick={() => addjob(true)}
            style={{
              backgroundColor: "rgba(39, 56, 91, 0.21)",
              backdropFilter: "blur(10px)",
              border: "none",
              color: "white",
              fontWeight: "600",
              padding: "8px 16px",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            <FontAwesomeIcon icon={faPlus} /> Add Job
          </button>
        </div>

        {/* Table */}
        <div
          className="dash-lines"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            color: "#e6f7ff",
          }}
        >
          {/* Heading Row */}
          <div
            style={{
              backgroundColor: "rgba(86, 142, 255, 0.21)",
              height: "50px",
              width: "100%",
              maxWidth: "1000px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              borderRadius: "6px",
              fontWeight: "600",
            }}
          >
            <div style={{ width: "200px", textAlign: "center" }}>DATE</div>
            <div style={{ width: "200px", textAlign: "center" }}>DOMAIN</div>
            <div style={{ width: "200px", textAlign: "center" }}>COMPANY</div>
            <div style={{ width: "200px", textAlign: "center" }}>STATUS</div>
          </div>

          {/* Static rows */}
          {[
            ["24-07-2025", "DevOps", "Rhombix Tech.", "Applied"],
            ["01-08-2025", "Backend Dev.", "Telesonic", "Waiting..."],
            ["08-08-2025", "UI/UX", "Evamps & Saanga", "✅ Done"],
            ["14-08-2025", "DevOps", "Teraform.tech", "No response"], 
          ].map((item, i) => (
            <div
              key={i}
              style={{
                backgroundColor:
                  i % 2 === 0
                    ? "rgba(255,255,255,0.05)"
                    : "rgba(86, 142, 255, 0.07)",
                height: "50px",
                width: "100%",
                maxWidth: "1000px",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                borderRadius: "6px",
                marginTop: "6px",
              }}
            >
              {item.map((col, idx) => (
                <div
                  key={idx}
                  style={{
                    width: "200px",
                    textAlign: "center",
                    fontSize: "16px",
                  }}
                >
                  {col}
                </div>
              ))}
            </div>
          ))}

          {/* Dynamic row from Form data */}
          {array.map((index, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "rgba(86, 142, 255, 0.21)",
                height: "50px",
                width: "100%",
                maxWidth: "1000px",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                borderRadius: "6px",
                marginTop: "6px",
              }}
            >
              <div style={{ width: "200px", textAlign: "center" }}>
               {enterjobdata[3] && enterjobdata[3].length > 0 ? enterjobdata[3] : "--"}
              </div>
              <div style={{ width: "200px", textAlign: "center" }}>
               {enterjobdata[1] && enterjobdata[1].length > 0 ? enterjobdata[3] : "--"}
              </div>
              <div style={{ width: "200px", textAlign: "center" }}>
               {enterjobdata[0] && enterjobdata[0].length > 0 ? enterjobdata[3] : "--"}
              </div>
              <div style={{ width: "200px", textAlign: "center" }}>
               {enterjobdata[2] && enterjobdata[2].length > 0 ? enterjobdata[3] : "--"}
              </div>
            </div>
          ))}
        </div>
      </ElectricBorder>
    </div>
  );
}
