const projects = [
  {
    title: 'Página web en React',
    desc: 'Portafolio personal desarrollado con React — muestra habilidades, proyectos y cursos universitarios.',
  },
];

function Projects() {
  return (
    <section id="projects">
      <div className="section-divider"></div>
      <h2>Proyectos</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {projects.map(p => (
          <div key={p.title} className="project-card">
            <h3>{p.title}</h3>
            <p style={{ marginTop: '8px' }}>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
