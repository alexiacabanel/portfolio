// Home.js

import React from 'react';
import ContactForm from '../components/ContactForm';

function Home() {
  return (
    <div>
      <h1>Bonjour, je m'appelle John Doe. Bienvenue sur mon portfolio !</h1>
      <p>
        Depuis quelques mois, j'apprends le développement web grâce à The Hacking Projet.
        J'ai ainsi pu apprendre à utiliser Ruby, Rails, JavaScript et React.
      </p>
      <h2>Liste des travaux</h2>
      <p>Vous pourrez trouver ci-dessous la liste de mes projets. J'en ai réalisé certains lors de ma formation chez The Hacking Project, et d'autres sont des projets personnels.</p>
      {/* Ici, tu peux inclure les détails des projets */}
      <h2>Contact</h2>
      <p>Vous souhaitez discuter avec moi, que ce soit pour me proposer un poste ou pour passer le temps pendant ce confinement ? Remplissez le formulaire ci-dessous, je vous contacterai dès que je le peux.</p>
      <ContactForm />
    </div>
  );
}

export default Home;
