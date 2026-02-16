import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="hero">
      <div className="overlay">
        <div className="content">
          <h1 className="main-title">
            THE <br /> DATE <br /> EDITION
          </h1>
          <p className="description">Таныг болзоонд урьж байна</p>

          {/* Дата авах хэсэг (Firebase-тэй дараа холбоно) */}
          <div className="input-group">
            <input
              type="text"
              placeholder="Raw data оруулна уу..."
              className="custom-input"
            />
            <button className="send-button">SEND TO FIREBASE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
