import React from "react";
import "./sidebar.css";

const SideBar = () => {
  return (
    <div>
      <div className="base-logo">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <h1>Base</h1>
      </div>
      <div className="db-list">
        <div className="icons-div">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="20px"
            width="20px"
          >
            <path d="M4 13h6a1 1 0 001-1V4a1 1 0 00-1-1H4a1 1 0 00-1 1v8a1 1 0 001 1zm-1 7a1 1 0 001 1h6a1 1 0 001-1v-4a1 1 0 00-1-1H4a1 1 0 00-1 1v4zm10 0a1 1 0 001 1h6a1 1 0 001-1v-7a1 1 0 00-1-1h-6a1 1 0 00-1 1v7zm1-10h6a1 1 0 001-1V4a1 1 0 00-1-1h-6a1 1 0 00-1 1v5a1 1 0 001 1z" />
          </svg>
          <li> Dashboard</li>
        </div>

        <div className="icons-div">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="20px"
            width="20px"
          >
            <path d="M18.944 11.112C18.507 7.67 15.56 5 12 5 9.244 5 6.85 6.611 5.757 9.15 3.609 9.792 2 11.82 2 14c0 2.757 2.243 5 5 5h11c2.206 0 4-1.794 4-4a4.01 4.01 0 00-3.056-3.888zM13 14v3h-2v-3H8l4-5 4 5h-3z" />
          </svg>
          <li>Upload</li>
        </div>

        <div className="icons-div">
          <svg fill="none" viewBox="0 0 15 15" height="20px" width="20px">
            <path
              fill="currentColor"
              d="M10 7.995V9H8V7.995h2zM10 6v.995H8V6h2zM7 6H5v.995h2V6zM7 7.995H5V9h2V7.995z"
            />
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M1 1.5A1.5 1.5 0 012.5 0h8.207L14 3.293V13.5a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 011 13.5v-12zM4 4h3V3H4v1zm7 1H4v5h7V5zm0 7H8v-1h3v1z"
              clipRule="evenodd"
            />
          </svg>
          <li>Invoice</li>
        </div>

        <div className="icons-div">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="20px"
            width="20px"
          >
            <path d="M19 4h-1V3c0-.6-.4-1-1-1s-1 .4-1 1v1H8V3c0-.6-.4-1-1-1s-1 .4-1 1v1H5C3.3 4 2 5.3 2 7v1h20V7c0-1.7-1.3-3-3-3zM2 19c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-9H2v9zm15-7c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm0 4c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm-5-4c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm0 4c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm-5-4c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm0 4c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z" />
          </svg>
          <li>Schedule</li>
        </div>

        <div className="icons-div">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="20px"
            width="20px"
          >
            <path d="M2 19c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-8H2v8zM19 4h-2V3c0-.6-.4-1-1-1s-1 .4-1 1v1H9V3c0-.6-.4-1-1-1s-1 .4-1 1v1H5C3.3 4 2 5.3 2 7v2h20V7c0-1.7-1.3-3-3-3z" />
          </svg>
          <li>Calender</li>
        </div>

        <div className="icons-div">
          <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            height="20px"
            width="20px"
          >
            <path d="M440.08 341.31c-1.66-2-3.29-4-4.89-5.93-22-26.61-35.31-42.67-35.31-118 0-39-9.33-71-27.72-95-13.56-17.73-31.89-31.18-56.05-41.12a3 3 0 01-.82-.67C306.6 51.49 282.82 32 256 32s-50.59 19.49-59.28 48.56a3.13 3.13 0 01-.81.65c-56.38 23.21-83.78 67.74-83.78 136.14 0 75.36-13.29 91.42-35.31 118-1.6 1.93-3.23 3.89-4.89 5.93a35.16 35.16 0 00-4.65 37.62c6.17 13 19.32 21.07 34.33 21.07H410.5c14.94 0 28-8.06 34.19-21a35.17 35.17 0 00-4.61-37.66zM256 480a80.06 80.06 0 0070.44-42.13 4 4 0 00-3.54-5.87H189.12a4 4 0 00-3.55 5.87A80.06 80.06 0 00256 480z" />
          </svg>
          <li>Notifications</li>
        </div>

        <div className="icons-div">
          <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            height="20px"
            width="20px"
          >
            <path d="M256 176a80 80 0 1080 80 80.24 80.24 0 00-80-80zm172.72 80a165.53 165.53 0 01-1.64 22.34l48.69 38.12a11.59 11.59 0 012.63 14.78l-46.06 79.52a11.64 11.64 0 01-14.14 4.93l-57.25-23a176.56 176.56 0 01-38.82 22.67l-8.56 60.78a11.93 11.93 0 01-11.51 9.86h-92.12a12 12 0 01-11.51-9.53l-8.56-60.78A169.3 169.3 0 01151.05 393L93.8 416a11.64 11.64 0 01-14.14-4.92L33.6 331.57a11.59 11.59 0 012.63-14.78l48.69-38.12A174.58 174.58 0 0183.28 256a165.53 165.53 0 011.64-22.34l-48.69-38.12a11.59 11.59 0 01-2.63-14.78l46.06-79.52a11.64 11.64 0 0114.14-4.93l57.25 23a176.56 176.56 0 0138.82-22.67l8.56-60.78A11.93 11.93 0 01209.94 26h92.12a12 12 0 0111.51 9.53l8.56 60.78A169.3 169.3 0 01361 119l57.2-23a11.64 11.64 0 0114.14 4.92l46.06 79.52a11.59 11.59 0 01-2.63 14.78l-48.69 38.12a174.58 174.58 0 011.64 22.66z" />
          </svg>
          <li>Settings</li>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
