// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

// NEW: Create placeholder components for your new pages
import MaterialManagement from './pages/MaterialManagement'; // For /materialManagement
import ReportsPage from './pages/ReportsPage'; // For /dashboard/reports
import UserManagement from './pages/UserManagement';
import RoleManagement from './pages/RoleManagement';


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
            path="/user"
            element={
              <PrivateRoute>
                <UserManagement />
              </PrivateRoute>
            }
          />
          <Route
            path="/roleManagement"
            element={
              <PrivateRoute>
                <RoleManagement />
              </PrivateRoute>
            }
          />
          
          <Route
            path="/materialManagement"
            element={
              <PrivateRoute>
                <MaterialManagement />
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