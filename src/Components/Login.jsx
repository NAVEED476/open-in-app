import React from "react";
import "./login.css";
const Login = () => {
  return (
    <div className="login-cont">
      <div className="left-cont">
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
      <div className="right-cont">
        <div className="signIn-box">
          <h3 style={{ textAlign: "left" }}>Sign In</h3>
          <p>Sign in to your account</p>
        </div>

        <div className="inner-cont">
          <div className="login-btns">
            <button>Sign in with Google</button>
            <button>Sign in with Apple</button>
          </div>

          <div className="login-form">
            <span>Email Address</span>
            <br />
            <input type="email" />
            <br />
            <span>Password</span>
            <br />
            <input type="password" />
            <br />
            <span style={{ color: "#346BD4" }}>Forgot Password?</span>
            <br />

            <button>Sign In</button>
          </div>

          <p>
            Don’t have an account?
            <span style={{ color: "#346BD4" }}> Register here</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
