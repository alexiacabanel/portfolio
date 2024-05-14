import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/projects');
        setProjects(response.data.data); // Utilise response.data.data pour accéder aux données des projets
      } catch (error) {
        console.error('Error fetching projects:', error);
        setError('Error fetching projects. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <Link to={`/project/${project.attributes.slug}`}>{project.attributes.title}</Link>
            <p>{project.attributes.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsList;
