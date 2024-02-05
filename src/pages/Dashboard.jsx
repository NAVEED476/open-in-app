import React from "react";
import "./dashboard.css";
import SideBar from "../Components/SideBar";
import Navbar from "../Components/Navbar";
import docs from "./docs.svg";

const Dashboard = () => {
  return (
    <div className="db-cont">
      <div className="sideBar">
        <SideBar />
      </div>
      <div className="db-right">
        <Navbar />

        <div className="upload-box">
          <docs style={{ width: "30px", height: "30px" }} />
          <img src={docs} alt="csv file" />
          <p>
            Drop your excel sheet here or{" "}
            <span style={{ color: "#605BFF" }}>Browse</span>
          </p>
          <button>
            {" "}
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="20px"
              width="20px"
            >
              <path d="M.5 9.9a.5.5 0 01.5.5v2.5a1 1 0 001 1h12a1 1 0 001-1v-2.5a.5.5 0 011 0v2.5a2 2 0 01-2 2H2a2 2 0 01-2-2v-2.5a.5.5 0 01.5-.5z" />
              <path d="M7.646 1.146a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8.5 2.707V11.5a.5.5 0 01-1 0V2.707L5.354 4.854a.5.5 0 11-.708-.708l3-3z" />
            </svg>
            upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
