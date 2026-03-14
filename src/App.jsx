import './App.css'
import Nav from './Nav'
import Project from "./Project.jsx";
import Skills from "./Skills.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import Info from "./Info.jsx";

function App() {
  return (
    <>
      <Nav />
      <Info />
      <div className="ticker-wrap">
        <div className="ticker-track">
          {[...Array(2)].map((_, i) =>
            ["React", "TypeScript", "Java", "Node.js", "PostgreSql", "Spring Boot", "Tailwind CSS", "Spring Framework", "Docker", "Goland", "Zig"].map(t => (
              <span key={`${t}-${i}`} className="ticker-item">
                <span className="ticker-dot" />{t}
              </span>
            ))
          )}
        </div>
      </div>
      <Project />
      <Skills />
      <About />
      <Contact />
      <Footer />
   </>
  );
}

export default App;