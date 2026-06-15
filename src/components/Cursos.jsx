const cursos = [
  {
    nombre: 'Introducción a la Computación',
    docentes: [
      { nombre: 'Ernesto Cuadros Vargas', url: 'https://www.linkedin.com/in/ecuadrosv/?isSelfProfile=false' },
      { nombre: 'Rosmary Violeta Quispe Zavala', url: 'https://www.linkedin.com/in/kelly-vizconde-la-motta-3a57a4143/?isSelfProfile=false' },
    ],
  },
  {
    nombre: 'Fundamentos de Programación',
    docentes: [
      { nombre: 'Kelly Vizconde Motta', url: 'https://www.linkedin.com/in/kelly-vizconde-la-motta-3a57a4143/?isSelfProfile=false' },
    ],
  },
  {
    nombre: 'Fundamentos Matemáticos para Computación',
    docentes: [
      { nombre: 'Fiorella Maria Rendon Garcia', url: 'https://www.linkedin.com/in/kelly-vizconde-la-motta-3a57a4143/?isSelfProfile=false' },
    ],
  },
  {
    nombre: 'Introducción a la Vida Universitaria',
    docentes: [
      { nombre: 'Pierina Pacheco Leyton' },
      { nombre: 'Claudia Lucia Quiroz Leyton' },
      { nombre: 'Gonzalo Max Portugal Yabar' },
      { nombre: 'Lilian Esperanza Moscoso Prieto' },
      { nombre: 'Jesus Abel Concha Gonzales' },
      { nombre: 'Gabriela Maria Ponce Reinoso' },
    ],
  },
  {
    nombre: 'Lógica',
    docentes: [{ nombre: 'Solange Ximena Tejada Cuadros' }],
  },
  {
    nombre: 'Comunicación',
    docentes: [
      { nombre: 'Lourdes Eliana Velarde Ortiz' },
      { nombre: 'Jhordan Enrique Rosell Zevallos' },
    ],
  },
];

function Cursos() {
  return (
    <section id="cursos">
      <div className="section-divider"></div>
      <h2>Cursos</h2>
      <div className="cursos-grid">
        {cursos.map(c => (
          <div key={c.nombre} className="curso-card">
            <p className="curso-titulo">{c.nombre}</p>
            <ul className="curso-docentes">
              {c.docentes.map(d => (
                <li key={d.nombre}>
                  {d.url
                    ? <a href={d.url} target="_blank" rel="noreferrer">{d.nombre}</a>
                    : d.nombre
                  }
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cursos;
