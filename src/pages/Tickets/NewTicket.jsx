import React, { useState } from 'react';

const NewTicket = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'Moyenne'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous enverriez les données à votre API
    console.log('Ticket created:', formData);
    alert('Ticket créé avec succès!');
  };

  return (
    <div className="new-ticket">
      <h1>Créer un Nouveau Ticket</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Titre:
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </label>
        <label>
          Description:
          <textarea name="description" value={formData.description} onChange={handleChange} required />
        </label>
        <label>
          Priorité:
          <select name="priority" value={formData.priority} onChange={handleChange}>
            <option value="Basse">Basse</option>
            <option value="Moyenne">Moyenne</option>
            <option value="Haute">Haute</option>
          </select>
        </label>
        <button type="submit">Créer le Ticket</button>
      </form>
    </div>
  );
};

export default NewTicket;