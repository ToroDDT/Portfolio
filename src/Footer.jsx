function Footer() {
    return (
        <>
            <footer>
                <span>Built with React · David Del Toro © 2026</span>
                <div className="footer-links">
                    {["Projects", "Skills", "About", "Contact"].map(l => (
                        <a href={`#${l.toLowerCase()}`} key={l}>{l}</a>
                    ))}
                </div>
            </footer>

        </>
    )
}

export default Footer;