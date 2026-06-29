import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import "./AppLayout.css";

export default function AppLayout({ children }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <div className="layout">
      <header className="layout-header">
        <Link to="/" className="layout-logo">
          MyDataApp
        </Link>

        <div className="layout-right">
          {user ? (
            <>
              <div className="user-info">
                {user.photo && (
                  <img
                    src={user.photo}
                    alt={user.name}
                    className="user-avatar"
                    referrerPolicy="no-referrer"
                  />
                )}
                <span className="user-name">{user.name}</span>
              </div>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <Link to="/" className="login-link">
              Login
            </Link>
          )}
        </div>
      </header>
      <main className="layout-main">{children}</main>
    </div>
  );
}
