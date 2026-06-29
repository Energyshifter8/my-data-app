import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

export default function AppLayout({ children }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0f0f0f]">
      <header className="flex items-center justify-between px-8 h-[60px] bg-[#141414] border-b border-[#1f1f1f] box-border">
        <Link
          to="/"
          className="text-lg font-bold no-underline bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent"
        >
          MyDataApp
        </Link>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              <div className="flex items-center gap-2">
                {user.photo && (
                  <img
                    src={user.photo}
                    alt={user.name}
                    className="w-[30px] h-[30px] rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                )}
                <span className="text-sm text-[#ccc]">{user.name}</span>
              </div>
              <button
                className="px-4 py-1.5 border border-[#333] rounded-md bg-transparent text-[#aaa] text-sm cursor-pointer transition-colors hover:border-[#666] hover:text-white"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/" className="text-sm font-medium text-[#667eea] no-underline">
              Login
            </Link>
          )}
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
