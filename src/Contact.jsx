function Contact() {
  return (
    <>
      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="max-w-sm">
          <div className="section-label">My</div>
          <h2><span className="grad-text">Contact Info</span></h2>
          <p className="section-sub">Open to full-time roles and Internships.</p>
          <div className="contact-grid">
            {[
              { icon: "✉️", label: "Email", val: "Deltoro1999@icloud.com", href: "mailto:Deltoro1999@icloud.com" },
              { icon: "🐙", label: "GitHub", val: "github.com/ToroDDT", href: "https://github.com/ToroDDT" },
              { icon: "💼", label: "LinkedIn", val: "linkedin.com/in/daviddel-toro", href: "https://www.linkedin.com/in/daviddel-toro/" },
            ].map(c => (
              <a href={c.href} className="contact-card" key={c.label}>
                <div>
                  <div className="contact-label">{c.label}</div>
                  <div className="contact-val">{c.val}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

    </>
  )

}

export default Contact;
