import React from "react";

const WelcomeScreen = ({ onStart }) => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center", // Төвд нь байрлуулна
        backgroundColor: "rgba(0, 0, 0, 0.6)", // Хап хараар биш, бага зэрэг тунгалаг
        backdropFilter: "blur(15px)", // Ар талыг нь бүрзийлгэнэ
        WebkitBackdropFilter: "blur(15px)", // Safari хөтөч дээр ажиллуулахад хэрэгтэй
        color: "#fff",
        transition: "all 0.5s ease",
      }}
    >
      {/* Текст хэсэг */}
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "200",
          letterSpacing: "10px",
          marginBottom: "40px",
          textAlign: "center",
          fontFamily: "serif",
          animation: "pulse 2s infinite",
        }}
      >
        ARE YOU READY?
      </h1>

      {/* Enter товчлуур */}
      <button
        onClick={onStart}
        style={{
          padding: "15px 50px",
          backgroundColor: "transparent",
          color: "#fff",
          border: "1px solid rgba(255, 255, 255, 0.4)",
          borderRadius: "50px",
          cursor: "pointer",
          fontSize: "16px",
          letterSpacing: "3px",
          transition: "all 0.3s ease",
          outline: "none",
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = "white";
          e.target.style.color = "black";
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = "transparent";
          e.target.style.color = "white";
        }}
      >
        ENTER
      </button>

      {/* Доорх жижиг бичиг */}
      <p
        style={{
          marginTop: "30px",
          fontSize: "12px",
          letterSpacing: "2px",
          opacity: 0.5,
          textTransform: "uppercase",
        }}
      >
        Click to unlock the experience
      </p>

      {/* Анимацийн стиль */}
      <style>
        {`
          @keyframes pulse {
            0% { opacity: 0.6; }
            50% { opacity: 1; }
            100% { opacity: 0.6; }
          }
        `}
      </style>
    </div>
  );
};

export default WelcomeScreen;
