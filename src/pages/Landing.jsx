import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import FacebookLoginButton from "../components/FacebookLoginButton";

const features = [
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
];

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
    <div className="min-h-screen flex flex-col bg-[#0f0f0f] text-[#f0f0f0]">
      <header className="flex items-center px-8 py-5">
        <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
          MyDataApp
        </span>
      </header>

      <section className="flex-1 flex items-center justify-center px-8 py-16">
        <div className="max-w-[640px] text-center">
          <h1 className="text-5xl md:text-[3.2rem] font-extrabold leading-tight tracking-tight mb-4">
            Your Data,{" "}
            <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
              Simplified
            </span>
          </h1>
          <p className="text-lg text-[#a0a0a0] leading-relaxed mb-10">
            A lightweight platform to capture, store, and manage your data in
            real time. Fast, secure, and built for the modern web.
          </p>

          <div className="max-w-[360px] mx-auto">
            <FacebookLoginButton onClick={handleLogin} disabled={loading} />
            {error && (
              <p className="text-red-400 text-sm mt-3">{error}</p>
            )}
          </div>

          <div className="mt-20 px-8 pb-12 mx-auto max-w-[1100px] w-full box-border">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why MyDataApp?
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-6 py-7 text-center transition-colors duration-200 hover:border-[#667eea] hover:-translate-y-0.5"
                >
                  <span className="block text-3xl mb-3">{f.icon}</span>
                  <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-[#a0a0a0] leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center py-6 text-xs text-[#555] border-t border-[#1a1a1a]">
        <p>&copy; {new Date().getFullYear()} MyDataApp. All rights reserved.</p>
      </footer>
    </div>
  );
}
