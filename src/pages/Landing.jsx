import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import FacebookLoginButton from "../components/FacebookLoginButton";
import "../LandingPage.css";

export default function Landing() {
  const { loginWithFacebook } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      await loginWithFacebook();
      navigate("/dashboard");
    } catch (e) {
      setError(e.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="landing">
      <header className="landing-header">
        <span className="landing-logo">MyDataApp</span>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Your Data, <span className="highlight">Simplified</span>
          </h1>
          <p className="hero-subtitle">
            A lightweight platform to capture, store, and manage your data in
            real time. Fast, secure, and built for the modern web.
          </p>

          <div
            style={{
              maxWidth: "360px",
              margin: "0 auto",
            }}
          >
            <FacebookLoginButton onClick={handleLogin} disabled={loading} />
            {error && (
              <p
                style={{
                  color: "#f87171",
                  fontSize: "0.85rem",
                  marginTop: "0.75rem",
                }}
              >
                {error}
              </p>
            )}
          </div>

          <div className="features-section" style={{ marginTop: "5rem" }}>
            <h2 className="features-title">Why MyDataApp?</h2>
            <div className="features-grid">
              {[
                {
                  title: "Real-time Data Entry",
                  desc: "Submit and store data instantly with Firebase Firestore.",
                  icon: "📝",
                },
                {
                  title: "Secure & Reliable",
                  desc: "Your data is safely stored and authenticated via Facebook login.",
                  icon: "🔒",
                },
                {
                  title: "Cross-platform Access",
                  desc: "Access your data from anywhere on any device.",
                  icon: "🌐",
                },
                {
                  title: "Instant Sync",
                  desc: "Changes sync in real-time across all sessions.",
                  icon: "⚡",
                },
              ].map((f) => (
                <div key={f.title} className="feature-card">
                  <span className="feature-icon">{f.icon}</span>
                  <h3 className="feature-card-title">{f.title}</h3>
                  <p className="feature-card-desc">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="landing-footer">
        <p>&copy; {new Date().getFullYear()} MyDataApp. All rights reserved.</p>
      </footer>
    </div>
  );
}
