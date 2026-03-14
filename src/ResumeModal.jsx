import { useEffect, useRef } from "react";

export default function ResumeModal({ isOpen, onClose }) {
    const closeRef = useRef(null);
    const overlayRef = useRef(null);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) closeRef.current?.focus();
    }, [isOpen]);

    useEffect(() => {
        const handler = (e) => { if (e.key === "Escape" && isOpen) onClose(); };
        document.addEventListener("keydown", handler);
        return () => document.removeEventListener("keydown", handler);
    }, [isOpen, onClose]);

    const handleTabKey = (e) => {
        if (e.key !== "Tab") return;
        const focusable = overlayRef.current?.querySelectorAll(
            "a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex='-1'])"
        );
        if (!focusable?.length) return;
        const first = focusable[0];
        const last  = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault(); last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault(); first.focus();
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="resume-overlay"
            ref={overlayRef}
            role="dialog"
            aria-modal="true"
            aria-label="Resume Viewer"
            onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
            onKeyDown={handleTabKey}
        >
            <div className="resume-container">

                <div className="resume-header">
                    <div className="resume-title">
                    </div>

                    <div className="resume-header-actions">
                        {/* Download button */}
                        <a
                            href="/resume.pdf"
                            download="David_DelToro_Resume.pdf"
                            className="resume-download-btn"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                                 stroke="currentColor" strokeWidth="2.5"
                                 strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                <polyline points="7 10 12 15 17 10"/>
                                <line x1="12" y1="15" x2="12" y2="3"/>
                            </svg>
                            Download PDF
                        </a>

                        {/* Close button */}
                        <button
                            ref={closeRef}
                            className="resume-close-btn"
                            onClick={onClose}
                            aria-label="Close resume"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                 stroke="currentColor" strokeWidth="2.5"
                                 strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"/>
                                <line x1="6" y1="6" x2="18" y2="18"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="resume-body">
                    <iframe
                        src="/resume.pdf"
                        title="David Del Toro Resume"
                        className="resume-iframe"
                    />
                </div>

            </div>
        </div>
    ); }