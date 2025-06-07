// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

// NEW: Create placeholder components for your new pages
import UserManagementPage from './pages/UserManagementPage'; // For /dashboard/users
import EquipmentManagementPage from './pages/EquipmentManagementPage'; // For /dashboard/equipment
import MaintenanceManagementPage from './pages/MaintenanceManagementPage'; // For /dashboard/maintenance
import AddUserPage from './pages/AddUserPage'; // For /dashboard/add-user
import ReportsPage from './pages/ReportsPage'; // For /dashboard/reports

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/login" replace />;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          {/* NEW PROTECTED ROUTES FOR MANAGEMENT */}
          <Route
            path="/dashboard/users"
            element={
              <PrivateRoute>
                {/* You might want a more specific role check here, e.g., <AdminRoute><UserManagementPage /></AdminRoute> */}
                <UserManagementPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/equipment"
            element={
              <PrivateRoute>
                <EquipmentManagementPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/maintenance"
            element={
              <PrivateRoute>
                <MaintenanceManagementPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/add-user"
            element={
              <PrivateRoute>
                {/* Again, consider an Admin/Manager specific route if needed */}
                <AddUserPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/reports"
            element={
              <PrivateRoute>
                <ReportsPage />
              </PrivateRoute>
            }
          />

          {/* Catch-all for undefined routes */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;