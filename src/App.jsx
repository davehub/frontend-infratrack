// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext'; // Import AuthProvider and useAuth
import Login from './pages/Login'; // Assuming your Login component is in src/pages/Login.jsx
import Register from './pages/Register'; // Assuming your Register component is in src/pages/Register.jsx
import Dashboard from './pages/Dashboard'; // Create a Dashboard component for protected content
import Home from './pages/Home'; // Create a Home component for public content

// A simple PrivateRoute component to protect routes
const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();
  // If there's no current user, redirect to the login page
  return currentUser ? children : <Navigate to="/login" replace />;
};

const App = () => {
  return (
    // Wrap your entire application with AuthProvider to make auth context available
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} /> {/* Your public home page */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          {/* Dashboard is only accessible if the user is logged in */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          {/* Add more protected routes here as needed */}
          {/* <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} /> */}

          {/* Catch-all for undefined routes (optional) */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;