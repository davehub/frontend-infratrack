// src/pages/Register.js (Example component, adjust as per your structure)
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import useAuth
import InputField from "../components/common/InputField";
import Button from "../components/common/Button";
import Card from "../components/common/Card";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { register } = useAuth(); // Use the register function from AuthContext
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      setLoading(false);
      return;
    }

    try {
      // Call the register function from AuthContext
      // This function now handles both registration AND auto-login
      await register(email, password);
      navigate("/dashboard"); // Redirect to dashboard after successful registration and auto-login
    } catch (err) {
      console.error("Erreur d'inscription:", err);
      // The error message comes directly from the AuthContext now
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-200 to-gray-100 p-6">
      <Card title="Inscription" className="w-full max-w-md shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-4 animate-pulse">
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          <InputField
            id="email"
            label="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="votre.email@example.com"
            required
            className="shadow-sm"
          />
          <InputField
            id="password"
            label="Mot de passe"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            required
            className="shadow-sm"
          />
          <InputField
            id="confirmPassword"
            label="Confirmer le mot de passe"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="********"
            required
            className="shadow-sm"
          />
          <Button type="submit" disabled={loading} className="w-full mt-4">
            {loading ? "Inscription en cours..." : "S'inscrire"}
          </Button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Vous avez déjà un compte ?{" "}
          <a
            href="/login"
            className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
          >
            Connectez-vous ici
          </a>
        </p>
      </Card>
    </div>
  );
};

export default Register;