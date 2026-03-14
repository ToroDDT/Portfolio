import {useState} from "react";
import ResumeModal from "./ResumeModal.jsx";
import "./resume.css";

function Info() {
    const [resumeOpen, setResumeOpen] = useState(false);
    return (
        <>
            <section className="hero">
                <div className="hero-dots" />

                <div className="badge animate-up">
                    <span className="badge-pulse" />
                    Open to opportunities
                </div>

                <h1 className="animate-up d1">
                    Hi, I'm <span className="grad-text">David Del Toro</span>.<br />
                </h1>

                <p className="hero-sub animate-up d2">
                    Full-Stack developer who has experience in Spring Boot, React, Docker and Sql.
                    Currently a Masters Student studying computer science at Cal State Fullerton
                </p>

                <div className="hero-actions animate-up d3">
                    <button className="btn-primary">View My Work ↓</button>
                    <button className="btn-ghost" onClick={() => setResumeOpen(true)}>View Resume</button>
                </div>

                <div className="chat-demo animate-up d4">
                    <div className="chat-header">
                        <span className="chat-dot" style={{ background: "#ff5f57" }} />
                        <span className="chat-dot" style={{ background: "#febc2e" }} />
                        <span className="chat-dot" style={{ background: "#28c840" }} />
                        <span className="chat-url">david-portfolio.dev</span>
                    </div>
                </div>
            </section>
            <ResumeModal
                isOpen={resumeOpen}
                onClose={() => setResumeOpen(false)}
            />
        </>
    )
}
export default Info;