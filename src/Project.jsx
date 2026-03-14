
const PROJECTS = [
    {
        num: "01",
        name: "MTG_DECKBUILDER",
        desc: "A magic the gathering deckbuilding app and companion, browse, search, and catalog your favorite decks",
        tags: ["Spring Boot", "Java", "Full-Stack", "HTMX", "SQL", "Postgres", "Thymleaf"],
        live: "#", github: "#"
    },
];

function Project() {
    return (
        <>

            {/* PROJECTS */}
            <section id="projects">
                <div className="max-w">
                    <div>
                        <div className="section-label">Selected Work</div>
                        <h2>Projects</h2>
                        <p className="section-sub">Some side projects I have been working on</p>
                    </div>
                    <div className="projects-grid">
                        {PROJECTS.map(p => (
                            <div className="project-card" key={p.num}>
                                <div className="project-num">{p.num}</div>
                                <h3>{p.name}</h3>
                                <p>{p.desc}</p>
                                <div className="tags">
                                    {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                                </div>
                                <div className="project-links">
                                    <a href={p.live} className="project-link">↗ Live</a>
                                    <a href={p.github} className="project-link">⌥ GitHub</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project;