import React, { useState } from "react";

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    language: "fr",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Sauvegarder les paramètres
    console.log("Settings saved:", settings);
    alert("Paramètres sauvegardés!");
  };

  return (
    <div className="settings">
      <h1>Paramètres</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="checkbox"
            name="notifications"
            checked={settings.notifications}
            onChange={handleChange}
          />
          Activer les notifications
        </label>

        <label>
          <input
            type="checkbox"
            name="darkMode"
            checked={settings.darkMode}
            onChange={handleChange}
          />
          Mode sombre
        </label>

        <label>
          Langue:
          <select
            name="language"
            value={settings.language}
            onChange={handleChange}
          >
            <option value="fr">Français</option>
            <option value="en">English</option>
          </select>
        </label>

        <button type="submit">Sauvegarder</button>
      </form>
    </div>
  );
};

export default Settings;
