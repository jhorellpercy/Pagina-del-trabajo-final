const skills = ['Python', 'React'];

function Skills() {
  return (
    <section id="skills">
      <div className="section-divider"></div>
      <h2>Habilidades</h2>
      <div className="skills-grid">
        {skills.map(s => (
          <span key={s} className="skill-tag">{s}</span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
