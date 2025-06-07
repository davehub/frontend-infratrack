import React, { useState } from "react";

const APIKeys = () => {
  const [keys, setKeys] = useState([
    {
      id: 1,
      name: "Application Mobile",
      key: "sk_test_abc123",
      createdAt: "2023-05-10",
    },
    {
      id: 2,
      name: "Intégration Web",
      key: "sk_test_xyz456",
      createdAt: "2023-06-01",
    },
  ]);
  const [newKeyName, setNewKeyName] = useState("");

  const generateNewKey = () => {
    const newKey = {
      id: keys.length + 1,
      name: newKeyName || "Nouvelle clé",
      key: "sk_test_" + Math.random().toString(36).substring(2, 10),
      createdAt: new Date().toISOString().split("T")[0],
    };
    setKeys([...keys, newKey]);
    setNewKeyName("");
  };

  const revokeKey = (id) => {
    setKeys(keys.filter((key) => key.id !== id));
  };

  return (
    <div className="api-keys">
      <h1>Gestion des Clés API</h1>

      <div className="new-key-form">
        <input
          type="text"
          placeholder="Nom de la clé"
          value={newKeyName}
          onChange={(e) => setNewKeyName(e.target.value)}
        />
        <button onClick={generateNewKey}>Générer une nouvelle clé</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Clé</th>
            <th>Créée le</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {keys.map((key) => (
            <tr key={key.id}>
              <td>{key.name}</td>
              <td className="key-value">{key.key}</td>
              <td>{key.createdAt}</td>
              <td>
                <button
                  onClick={() => revokeKey(key.id)}
                  className="btn-sm danger"
                >
                  Révoquer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default APIKeys;
