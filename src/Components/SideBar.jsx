import React from "react";
import "./sidebar.css";

const SideBar = () => {
  return (
    <div>
      <div className="base-logo">
        <img
          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT7WmxDkNKlDDKlKXUmAjCLzFJuWrZoJSaSGF6HeA8X4US5Rt1U"
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
