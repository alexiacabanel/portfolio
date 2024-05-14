import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeContext'; // Importe le ThemeProvider
import axios from 'axios'; // Importe Axios pour les requêtes HTTP
import showdown from 'showdown'; // Importe Showdown pour la conversion Markdown -> HTML
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import ProjectsList from './components/ProjectsList'; // Nouveau composant pour afficher la liste des projets
import ProjectDetail from './components/ProjectDetails'; // Nouveau composant pour afficher les détails d'un projet
import Navbar from './components/Navbar';

function App() {
  return (
      <BrowserRouter>
        <main>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<ProjectsList />} /> {/* Nouvelle route pour afficher la liste des projets */}
            <Route path="/project/:slug" element={<ProjectDetail />} /> {/* Nouvelle route pour afficher les détails d'un projet */}
          </Routes>
        </main>
      </BrowserRouter>
  );
}

export default App;
