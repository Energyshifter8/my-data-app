import { useAuth } from "./AuthContext";
import "./LandingPage.css";

const features = [
  {
    title: "Real-time Data Entry",
    desc: "Easily submit and store data instantly with Firebase-powered Firestore backend.",
    icon: "📝",
  },
  {
    title: "Secure & Reliable",
    desc: "Your data is safely stored and authenticated via Facebook login.",
    icon: "🔒",
  },
  {
    title: "Cross-platform Access",
    desc: "Access your data from anywhere on any device with a modern web app.",
    icon: "🌐",
  },
  {
    title: "Instant Sync",
    desc: "Changes sync in real-time across all sessions, keeping everyone on the same page.",
    icon: "⚡",
  },
];

export default function LandingPage() {
  const { loginWithFacebook, loading } = useAuth();

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
          <button
            className="fb-login-btn"
            onClick={loginWithFacebook}
            disabled={loading}
          >
            <svg className="fb-icon" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
              />
            </svg>
            {loading ? "Loading..." : "Continue with Facebook"}
          </button>
        </div>
      </section>

      <section className="features-section">
        <h2 className="features-title">Why MyDataApp?</h2>
        <div className="features-grid">
          {features.map((f) => (
            <div key={f.title} className="feature-card">
              <span className="feature-icon">{f.icon}</span>
              <h3 className="feature-card-title">{f.title}</h3>
              <p className="feature-card-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="landing-footer">
        <p>&copy; {new Date().getFullYear()} MyDataApp. All rights reserved.</p>
      </footer>
    </div>
  );
}
