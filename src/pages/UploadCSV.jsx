import React, { useState } from "react";
import "./dashboard.css";
import SideBar from "../Components/SideBar";
import Navbar from "../Components/Navbar";
import Papa from "papaparse";

const UploadCSV = () => {
  const [jsonData, setJsonData] = useState(null);
  const [tableState, setTableState] = useState(false);
  const [selectedTagsMap, setSelectedTagsMap] = useState({});

  const handleTagSelection = (itemId, selectedTag) => {
    setSelectedTagsMap((prevState) => ({
      ...prevState,
      [itemId]: [...(prevState[itemId] || []), selectedTag],
    }));
  };

  const handleTagRemoval = (itemId, tagToRemove) => {
    setSelectedTagsMap((prevState) => ({
      ...prevState,
      [itemId]: prevState[itemId].filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleCSVInputChange = (event) => {
    const file = event.target.files[0];

    Papa.parse(file, {
      header: true,
      complete: (result) => {
        setJsonData(result.data);
        setTableState(true);
      },
      error: (error) => {
        console.error("CSV parsing error:", error);
      },
    });
  };

  return (
    <div className="db-cont">
      <div className="sideBar">
        <SideBar />
      </div>
      <div className="db-right">
        <div className="nav-cont">
          <Navbar />
        </div>

        <div className="table-cont">
          <div className="upload-box">
            {/* <docs style={{ width: "30px", height: "30px" }} /> */}
           
            <p>
              Drop your excel sheet here or{" "}
              <span style={{ color: "#605BFF" }}>
                <input
                  style={{
                    cursor: "pointer",
                    margin: "10px 0px 0px 0px",
                  }}
                  name="Browse"
                  type="file"
                  accept=".csv"
                  onChange={handleCSVInputChange}
                />
              </span>
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

          {tableState && (
            <div className="table-box">
              <h2>Uploads</h2>
              <table>
                <thead>
                  <tr>
                    <th style={{ width: "100px" }}>SI No</th>
                    <th style={{ width: "250px" }}>Links</th>
                    <th style={{ width: "250px" }}>Prefix</th>
                    <th style={{ width: "250px" }}>Add Tags</th>
                    <th style={{ width: "400px" }}>Selected Tags</th>
                  </tr>
                </thead>
                <tbody>
                  {jsonData &&
                    jsonData.map((item, index) => (
                      <tr key={index}>
                        <td className="td">{item.id}</td>
                        <td style={{ color: "#5B93FF" }}>
                          <a
                            href={item.links}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.links}
                          </a>
                        </td>
                        <td>{item.prefix}</td>
                        <td>
                          <div
                            style={{
                              borderRadius: "8px",
                              boxShadow:
                                "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                            }}
                          >
                            <label htmlFor=""></label>
                            <select
                              style={{ width: "100px" }}
                              onChange={(e) =>
                                handleTagSelection(item.id, e.target.value)
                              }
                              value=""
                            >
                              <option value="">Select Tags</option>
                              {item["select tags"]
                                .split(", ")
                                .map((tag, tagIndex) => (
                                  <option key={tagIndex} value={tag}>
                                    {tag}
                                  </option>
                                ))}
                            </select>
                          </div>
                        </td>
                        <td style={{
                          width:"400px",
                          
                        }}>
                          <div className="chips">
                            {selectedTagsMap[item.id] &&
                              selectedTagsMap[item.id].map((tag, index) => (
                              
                                  <span
                                  key={index}
                                  style={{
                                    marginRight: "10px",
                                    padding: "5px",
                                    fontSize: "14px",
                                    background: "#5B93FF",
                                    color: "#FFFFFF",
                                    borderRadius: "4px",
                                    display:"flex"
                                   
                                  }}
                                >
                                  {tag}
                                  <button
                                    style={{
                                      marginLeft: "5px",
                                    }}
                                    onClick={() =>
                                      handleTagRemoval(item.id, tag)
                                    }
                                  >
                                    X
                                  </button>
                                </span>
                                
                              ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
           )} 
        </div>
      </div>
    </div>
  );
};

export default UploadCSV;
