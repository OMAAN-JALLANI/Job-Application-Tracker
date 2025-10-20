import React, { useState } from "react";
import "./btn.css";
import "./ElectricBorder.css";
import ElectricBorder from "./ElectricBorder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faPlus,
  faTable,
  faTimes,
  faTrash,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

export default function Dashboard({ addjob, backStart, enterjobdata }) {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [visible, setVisible] = useState("visible");
  const [jobs, setJobs] = useState([
    ["24-07-2025", "DevOps", "Rhombix Tech.", "Applied"],
    ["01-08-2025", "Backend Dev.", "Telesonic", "Waiting..."],
    ["08-08-2025", "UI/UX", "Evamps & Saanga", "✅ Done"],
    ["14-08-2025", "DevOps", "Teraform.tech", "No response"],
  ]);

  const addjobFun = () => {
    addjob(true);
    setVisible("hidden");
  };

  // 🧩 Add new job from form (if received)
  if (enterjobdata && enterjobdata.length >= 4) {
    const [company, domain, status, date, note] = enterjobdata;
    const formattedDynamicJob = [date, domain, company, status, note];

    // Prevent duplicate insertion
    if (!jobs.some((job) => JSON.stringify(job) === JSON.stringify(formattedDynamicJob))) {
      setJobs((prev) => [...prev, formattedDynamicJob]);
    }
  }

  // Popup controls
  const openPopup = (job, index) => {
    setSelectedJob({ data: job, index });
    setShowPopup(true);
  };
  const closePopup = () => {
    setShowPopup(false);
    setSelectedJob(null);
  };

  // 🗑️ Delete job
  const deleteJob = () => {
    if (selectedJob) {
      const updated = jobs.filter((_, i) => i !== selectedJob.index);
      setJobs(updated);
      closePopup();
    }
  };

  // 💾 Download JSON
  const downloadJobData = () => {
    if (selectedJob) {
      const data = {
        Date: selectedJob.data[0],
        Domain: selectedJob.data[1],
        Company: selectedJob.data[2],
        Status: selectedJob.data[3],
        Note: selectedJob.data[4] || "N/A",
      };
      const blob = new Blob([JSON.stringify(data, null, 2)], {
        type: "application/json",
      });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `${data.Company.replace(/\s+/g, "_")}_job.json`;
      link.click();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "none",
      }}
    >
      <ElectricBorder
        color="rgb(86, 143, 255)"
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
          position: "relative",
        }}
      >
        {/* Heading */}
        <div
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
            <FontAwesomeIcon icon={faTable} style={{ color: "rgb(225, 228, 232)" }} /> Dashboard
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
              padding: "8px 12px",
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>

          <button
            className="add"
            onClick={addjobFun}
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
              visibility: visible,
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
          {/* Table Heading */}
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

          {/* Data Rows */}
          {jobs.map((job, i) => (
            <div
              key={i}
              onClick={() => openPopup(job, i)}
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
                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "rgba(86, 142, 255, 0.25)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  i % 2 === 0
                    ? "rgba(255,255,255,0.05)"
                    : "rgba(86, 142, 255, 0.07)")}
            >
              {job.slice(0, 4).map((col, idx) => (
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
        </div>
      </ElectricBorder>

      {/* Popup Modal */}
      {showPopup && selectedJob && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={closePopup}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "rgba(39, 56, 91, 0.95)",
              padding: "25px",
              borderRadius: "12px",
              width: "350px",
              color: "white",
              boxShadow: "0 0 20px rgba(86,142,255,0.5)",
              textAlign: "center",
              position: "relative",
              animation: "fadeIn 0.4s ease",
            }}
          >
            <button
              onClick={closePopup}
              style={{
                position: "absolute",
                top: "8px",
                right: "8px",
                background: "transparent",
                border: "none",
                color: "white",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>

            <h2 style={{ marginBottom: "15px", color: "#89b6ff" }}>Job Details</h2>
            <div style={{ textAlign: "left", lineHeight: "1.8", fontSize: "15px" }}>
              <strong>Date:</strong> {selectedJob.data[0]} <br />
              <strong>Domain:</strong> {selectedJob.data[1]} <br />
              <strong>Company:</strong> {selectedJob.data[2]} <br />
              <strong>Status:</strong> {selectedJob.data[3]} <br />
              {selectedJob.data[4] && (
                <>
                  <strong>Note:</strong> {selectedJob.data[4]} <br />
                </>
              )}
            </div>

            {/* 🗑️ Delete Button */}
            <button
              onClick={deleteJob}
              style={{
                marginTop: "20px",
                background: "rgba(184, 184, 184, 0.2)",
                border: "1px solid white",
                color: "white",
                padding: "8px 16px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "600",
                transition: "0.3s",
                marginRight: "10px",
              }}
            >
              <FontAwesomeIcon icon={faTrash} /> Delete Job
            </button>

            {/* 💾 Download JSON Button */}
            <button
              onClick={downloadJobData}
              style={{
                marginTop: "20px",
                background: "rgba(86,142,255,0.2)",
                border: "1px solid #568eff",
                color: "#9dbdff",
                padding: "8px 16px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "600",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.background = "rgba(86,142,255,0.4)")}
              onMouseLeave={(e) => (e.target.style.background = "rgba(86,142,255,0.2)")}
            >
              <FontAwesomeIcon icon={faDownload} /> Download Data
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
