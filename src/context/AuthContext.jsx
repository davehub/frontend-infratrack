// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_BASE_URL = 'http://localhost:5000/api'; // Assurez-vous que c'est correct

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Dans une application réelle, vous valideriez ce token avec votre backend.
      // Pour l'instant, si un token existe, nous supposons qu'il est valide.
      // Idéalement, le token contiendrait les infos de l'utilisateur, ou vous feriez une requête /me.
      // Exemple simple:
      try {
        const decodedToken = JSON.parse(atob(token.split('.')[1])); // Décodage simple d'un JWT (pas de validation)
        setCurrentUser({ email: decodedToken.email, id: decodedToken.id });
      } catch (e) {
        console.error("Failed to decode token from localStorage:", e);
        localStorage.removeItem('token'); // Clear invalid token
        setCurrentUser(null);
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

      const { token, user } = response.data;
      localStorage.setItem('token', token);
      setCurrentUser(user); // `user` devrait contenir au moins `{ id, email, name }`
      return user;
    } catch (error) {
      console.error("Login API error:", error.response?.data || error.message);
      // IMPORTANT: L'API de connexion doit renvoyer un message d'erreur clair
      // Par exemple: { message: "Invalid credentials" }
      throw new Error(error.response?.data?.message || "Échec de la connexion. Veuillez vérifier vos identifiants.");
    }
  };

  const register = async (email, password) => {
    try {
      // 1. Appel de l'API d'inscription
      const response = await axios.post(`${API_BASE_URL}/register`, {
        email,
        password,
      });

      console.log("Inscription réussie:", response.data);

      // 2. Connexion automatique après l'inscription
      // Il est CRUCIAL que l'email et le mot de passe soient EXACTEMENT les mêmes
      // que ceux utilisés pour l'inscription.
      const loggedInUser = await login(email, password);

      return loggedInUser;
    } catch (error) {
      console.error("Registration API error:", error.response?.data || error.message);
      let errorMessage = "Échec de l'inscription. Veuillez réessayer.";
      if (error.response?.data?.message) {
          errorMessage = error.response.data.message;
          if (errorMessage === "User already exists") {
              errorMessage = "Un compte avec cet e-mail existe déjà.";
          }
      }
      throw new Error(errorMessage);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setCurrentUser(null);
  };

  const value = {
    currentUser,
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