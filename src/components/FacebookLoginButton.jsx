import { useState } from "react";

const btnStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  width: "100%",
  height: "48px",
  border: "none",
  borderRadius: "8px",
  background: "#1877F2",
  color: "#fff",
  fontSize: "1rem",
  fontWeight: 600,
  cursor: "pointer",
  transition: "background 0.2s",
};

export default function FacebookLoginButton({ onClick, disabled }) {
  const [hover, setHover] = useState(false);

  return (
    <button
      style={{
        ...btnStyle,
        background: hover && !disabled ? "#166FE5" : "#1877F2",
        opacity: disabled ? 0.6 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
      }}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
          fill="currentColor"
        />
      </svg>
      {disabled ? (
        <span
          style={{
            width: "18px",
            height: "18px",
            border: "2px solid rgba(255,255,255,0.3)",
            borderTopColor: "#fff",
            borderRadius: "50%",
            animation: "fb-spin 0.6s linear infinite",
            display: "inline-block",
          }}
        />
      ) : (
        "Continue with Facebook"
      )}
      <style>{`@keyframes fb-spin { to { transform: rotate(360deg); } }`}</style>
    </button>
  );
}
