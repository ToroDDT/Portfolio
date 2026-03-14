const SKILLS = [
    "React", "TypeScript", "Node.js", "Spring Boot", "Java",
    "Tailwind CSS", "PostgreSql", "Linux", "Docker", "Goland"
];

function Skills () {
    return (
        <>
            {/* SKILLS */}
            <section id="skills" className="skills-section">
                <div className="max-w">
                    <div className="section-label">Skills</div>
                    <h2>My <span className="grad-text">Tech Stack</span></h2>
                    <p className="section-sub">Tools I reach for daily — and a few I'm actively learning and using.</p>
                    <div className="skills-grid">
                        {SKILLS.map(s => <div className="skill-chip" key={s}>{s}</div>)}
                    </div>
                </div>
            </section>

        </>
    )
}

export default Skills;