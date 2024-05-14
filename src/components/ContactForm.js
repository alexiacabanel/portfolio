// ContactForm.js

import React, { useState } from 'react';

function ContactForm() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour gérer l'envoi du formulaire
    console.log('Subject:', subject);
    console.log('Message:', message);
    // Réinitialiser les champs après la soumission
    setSubject('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="subject">Sujet :</label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message :</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default ContactForm;
