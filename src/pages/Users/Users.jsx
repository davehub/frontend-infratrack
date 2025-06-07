import React, { useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users] = useState([
    { id: 1, name: "Jean Dupont", email: "jean@example.com", role: "Admin" },
    {
      id: 2,
      name: "Marie Martin",
      email: "marie@example.com",
      role: "Technicien",
    },
  ]);

  return (
    <div className="users">
      <h1>Gestion des Utilisateurs</h1>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Rôle</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <Link to={`/users/${user.id}`} className="btn-sm">
                  Profil
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
