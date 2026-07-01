
function About() {
  return (
    <>
      <section id="about">
        <div className="about-grid">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className="about-avatar">🧑‍💻</div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
              {[["React", "#bfdbfe"], ["TypeScript", "#e0e7ff"], ["Next.js", "#d1fae5"]].map(([label, bg]) => (
                <span key={label} style={{ background: bg, padding: "0.3rem 0.8rem", borderRadius: "99px", fontSize: "0.78rem", fontFamily: "var(--font-mono)" }}>{label}</span>
              ))}
            </div>
          </div>
          <div className="about-text">
            <div className="section-label">About Me</div>
            <h2>Building for the <span className="grad-text">web</span> since 2023</h2>
            <p>I'm a currently a student with a deep passion for developing and building projects. </p>
            <p>The languages that I have the most experience with are Java, Python, JS, and Go. </p>
            <div className="about-stats">
              <div>
                <div className="stat-num"><span>4+</span></div>
                <div className="stat-label">Years building</div>
              </div>
              <div>
                <div className="stat-num"><span>3</span></div>
                <div className="stat-label">Projects shipped</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About;
