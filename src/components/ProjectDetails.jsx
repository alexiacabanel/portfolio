import React, { useState, useEffect } from 'react';
import axios from 'axios';
import showdown from 'showdown';

const converter = new showdown.Converter();

const ProjectDetail = ({ match }) => {
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/projects/${match.params.slug}`);
        setProject(response.data);
      } catch (error) {
        console.error('Error fetching project:', error);
      }
    };

    fetchProject();
  }, [match.params.slug]);

  return (
    <div>
      {project && (
        <div>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(project.content) }} />
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
