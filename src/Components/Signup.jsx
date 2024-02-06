import React, { useEffect, useState } from "react";
import "./login.css";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [userCred, setUserCred] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth < 400);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let formData = {
    name: name,
    email: email,
    password: password,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim().length === 0) {
      alert("name field can not be empty!");
    } else if (email.trim().length === 0) {
      alert("email is Mandatory");
    } else if (password.trim().length < 6) {
      alert("password length should 6");
    } else {
      localStorage.setItem("user", JSON.stringify(formData));
      alert("user created succesfully");
      navigate("/");
    }
  };

  return (
    <>
      <div className="login-cont">
        {isMobile ? (
          <div className="website-logo">
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
        ) : (
          <div className="left-cont">
            <div>
              <img
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT7WmxDkNKlDDKlKXUmAjCLzFJuWrZoJSaSGF6HeA8X4US5Rt1U"
                alt=""
                style={{
                  width: "50p",
                  height: "50px",
                  margin: "0px 0px 0px 10px",
                  borderRadius: "16px",
                }}
              />
            </div>
            <div className="website-logo">
              <h1>BASE</h1>
            </div>
            <div className="social-icons">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1n9usj0siXgBUm1mwhm3lgi5Bq6l8foOEGQ&usqp=CAU"
                alt=""
              />
              <img
                src="data:image/png;base64,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"
                alt=""
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT88jPrNlIbtHenEt7pBgZCv2xKgi0hEK_z7w&usqp=CAU"
                alt=""
              />
              <img
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
          </div>
        )}
        <div className="right-cont">
          <div className="signIn-box">
            <h3 style={{ textAlign: "left" }}>Sign Up</h3>
            <p>create new Account</p>
          </div>

          <div className="inner-cont">
            <div className="login-btns">
              <button>
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    navigate("/dashboard");
                    const credentialResponseDecoded = jwtDecode(
                      credentialResponse.credential
                    );
                    setUserCred(credentialResponseDecoded);
                    console.log(credentialResponseDecoded);
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />
              </button>
              <button>SignUp with Apple</button>
            </div>

            <div className="login-form">
              <form onSubmit={handleSubmit}>
                <span>User Name</span>
                <br />
                <input
                  required
                  type="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <br />
                <span>Email Address</span>
                <br />
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <span>Password</span>
                <br />
                <input
                  required
                  type="password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
                <br />

                <button style={{ marginTop: "10px" }}>Sign Up</button>
              </form>
            </div>

            <p>
              Already have an Account?
              <span style={{ color: "#346BD4", cursor: "pointer" }}>
                {" "}
                <Link to="/">Sign In here</Link>
              </span>
            </p>
            {isMobile && (
              <div className="social-icons" style={{ marginTop: "30px" }}>
                <img
                  src="data:image/png;base64,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"
                  alt="git"
                />
                <img
                  src="data:image/png;base64,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"
                  alt="twitter"
                />
                <img
                  src="data:image/png;base64,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"
                  alt="Linkedin"
                />
                <img
                  src="data:image/png;base64,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"
                  alt="Discord"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
