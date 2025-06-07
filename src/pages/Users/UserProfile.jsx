import React from "react";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  useParams();
  // En réalité, vous feriez une requête API ici
  const user = {
    id: 1,
    name: "Jean Dupont",
    email: "jean@example.com",
    role: "Admin",
    lastLogin: "2023-06-10 14:30",
    createdAt: "2023-01-15",
  };

  return (
    <div className="user-profile">
      <h1>Profil Utilisateur</h1>
      <div className="profile-card">
        <h2>{user.name}</h2>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Rôle:</strong> {user.role}
        </p>
        <p>
          <strong>Dernière connexion:</strong> {user.lastLogin}
        </p>
        <p>
          <strong>Compte créé le:</strong> {user.createdAt}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
