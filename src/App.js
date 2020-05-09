import React, { useState, useEffect } from "react";

import "./styles.css";

import Header from './components/Header';

import api from "./services/api";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddRepository() {

    const response = await api.post('projects', {
      title: 'Front-end React',
      owner: 'Alexei Abianna'
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <>
    <Header title="Projects" />

    <ul>
      {projects.map(project => <li key={project.id}>{project.title}</li>)}
    </ul>

    <div>
      <ul data-testid="repository-list">
        <li>
          Repositório 1

          <button onClick={() => handleRemoveRepository(1)}>
            Remover
          </button>
        </li>
      </ul>

      <button type="button" onClick={handleAddRepository}>Adicionar</button>
    </div>
    </>
  );
}

export default App;
