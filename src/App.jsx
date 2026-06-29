import { Routes, Route } from "react-router-dom";
import AppLayout from "./AppLayout";
import Landing from "./pages/Landing";
import Dashboard from "./Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <AppLayout>
              <Dashboard />
            </AppLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
