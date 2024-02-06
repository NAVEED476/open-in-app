import React, { useState, useEffect } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 400);
  const [displysidebar, setDisplaySideBar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function NewSideBar() {
    return (
      <>
        <div style={{
          width:"200px",
          height:"200px",
          border:"1px solid red",
        }}>

        </div>
      </>
    );
  }

  const handleClick = () => {
    setDisplaySideBar(true);
  };
  return (
    <>
      {isMobile ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ cursor: "pointer" }} onClick={handleClick}>
            <svg
              viewBox="0 0 64 64"
              fill="currentColor"
              height="3em"
              width="3em"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeMiterlimit={10}
                strokeWidth={2}
                d="M12 21h40M12 33h40M12 45h40"
              />
            </svg>
          </div>
          <div className="navbarMobile">
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT7WmxDkNKlDDKlKXUmAjCLzFJuWrZoJSaSGF6HeA8X4US5Rt1U"
              style={{
                width: "32px",
                height: "32px",
                marginLeft: "-80px",
                marginRight: "10px",
                borderRadius: "16px",
              }}
              alt=""
            />
            <h1>BASE</h1>
          </div>

          {displysidebar && <NewSideBar />}
          <div style={{ display: "flex", gap: "10px" }}>
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              height="2em"
              width="2em"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={32}
                d="M427.68 351.43C402 320 383.87 304 383.87 217.35 383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43 73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57zM320 384v16a64 64 0 01-128 0v-16"
              />
            </svg>
            <img
              style={{
                width: "37px",
                height: "30px",
                border: "1px solid red",
                borderRadius: "50%",
              }}

              //   src={imageUrl}
              //   alt={altText}
            />
          </div>

         
        </div>
      ) : (
        <div className="navbar-cont">
          <div className="upload-csv">
            <h4>Upload CSV</h4>
          </div>
          <div className="navbar-right">
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              height="25px"
              width="25px"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={32}
                d="M427.68 351.43C402 320 383.87 304 383.87 217.35 383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43 73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57zM320 384v16a64 64 0 01-128 0v-16"
              />
            </svg>
            <img
            //   src={imageUrl}
            //   alt={altText}
            />
          </div>
        </div>
      )}

      
    </>
  );
};

export default Navbar;
