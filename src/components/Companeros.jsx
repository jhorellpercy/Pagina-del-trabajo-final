const companeros = [
  { nombre: 'Fernando Marco Barra Pérez', url: 'https://fernandoucsp.github.io/proyecto2/' },
  { nombre: 'Nombre Apellido', url: '' },
  { nombre: 'Nombre Apellido', url: '' },
];

function Companeros() {
  return (
    <section id="companeros">
      <div className="section-divider"></div>
      <h2>Páginas de mis compañeros</h2>
      <div className="cursos-grid">
        {companeros.map((c, i) => (
          <div key={i} className="curso-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
            <span style={{ fontSize: '0.95rem', color: 'var(--text)', fontWeight: 500 }}>
              {c.nombre}
            </span>
            {c.url
              ? (
                <a
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: '0.8rem',
                    padding: '6px 14px',
                    border: '1px solid var(--accent-bright)',
                    borderRadius: '6px',
                    color: 'var(--accent-bright)',
                    whiteSpace: 'nowrap',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => e.target.style.background = 'rgba(176,34,64,0.12)'}
                  onMouseLeave={e => e.target.style.background = 'transparent'}
                >
                  Ver página →
                </a>
              )
              : (
                <span style={{ fontSize: '0.75rem', color: 'var(--muted)', fontStyle: 'italic' }}>
                  Próximamente
                </span>
              )
            }
          </div>
        ))}
      </div>
    </section>
  );
}

export default Companeros;
