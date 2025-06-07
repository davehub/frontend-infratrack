import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userRole, setUserRole] = useState(null); // New state for user role
  const [userId, setUserId] = useState(null);     // New state for user ID
  const [loading, setLoading] = useState(true);

  const API_BASE_URL = 'http://localhost:5000/api'; // Ensure this matches your backend

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('currentUser'); // Store user info as string
    const storedRole = localStorage.getItem('userRole');
    const storedId = localStorage.getItem('userId');

    if (token && storedUser && storedRole && storedId) {
      try {
        setCurrentUser(JSON.parse(storedUser));
        setUserRole(storedRole);
        setUserId(storedId);
      } catch (e) {
        console.error("Failed to parse stored user data:", e);
        // Clear invalid data
        localStorage.removeItem('token');
        localStorage.removeItem('currentUser');
        localStorage.removeItem('userRole');
        localStorage.removeItem('userId');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, {
        email,
        password,
      });

      const { token, user } = response.data; // Backend should send user object with id, email, role

      localStorage.setItem('token', token);
      localStorage.setItem('currentUser', JSON.stringify({ email: user.email })); // Store minimal current user info
      localStorage.setItem('userRole', user.role || 'user'); // Store user role, default to 'user'
      localStorage.setItem('userId', user.id);              // Store user ID

      setCurrentUser({ email: user.email });
      setUserRole(user.role || 'user');
      setUserId(user.id);

      return user;
    } catch (error) {
      console.error("Login API error:", error.response?.data || error.message);
      throw error.response?.data?.message || "Échec de la connexion. Veuillez réessayer.";
    }
  };

  const register = async (email, password) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/register`, {
        email,
        password,
      });

      console.log("Registration successful:", response.data);

      // Automatically log in the user after successful registration
      const loggedInUser = await login(email, password); // login will handle setting token, user, role, id

      return loggedInUser;
    } catch (error) {
      console.error("Registration API error:", error.response?.data || error.message);
      if (error.response?.data?.message === "User already exists") {
        throw "Un compte avec cet e-mail existe déjà.";
      }
      throw error.response?.data?.message || "Échec de l'inscription. Veuillez réessayer.";
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userId');
    setCurrentUser(null);
    setUserRole(null);
    setUserId(null);
  };

  const value = {
    currentUser,
    userRole, // Expose userRole
    userId,   // Expose userId
    login,
    logout,
    register,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};