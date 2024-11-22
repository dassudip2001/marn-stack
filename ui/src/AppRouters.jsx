import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import Login from "./components/Login";
import Register from "./components/Register";
import MainLayout from "./layout/MainLayout";
import ProtectedRoute from "./ProtectedRoute ";
import Dashboard from "./components/Dashboard";
const AppRouters = () => {
  return (
    <Router>
      <Routes>
        {/* public  */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        {/* protected */}
        <Route element={<MainLayout />}>
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default AppRouters;
