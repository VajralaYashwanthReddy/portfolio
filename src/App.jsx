
import profile from "./assets/profile.jpg";
import "./App.css";

function App() {
  const skills = [
    "Java",
    "Spring Boot",
    "React",
    "MySQL",
    "Docker",
    "Kubernetes",
    "Git",
    "GitHub",
    "REST APIs",
    "Swagger",
  ];

  return (
    <div
      style={{
        background: "#0f172a",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      {/* Hero */}
      <section className="hero">
  <img src={profile} alt="Profile" className="profile-img" />

  <div className="hero-content">
    <h1>Vajrala Yashwanth Reddy</h1>

    <h2>
      Full Stack Developer | Java | Spring Boot | React | Docker
    </h2>

    <p>
      Final Year Computer Science Engineering student at Malla
      Reddy University with hands-on experience in Java,
      Spring Boot, React, MySQL, Docker and REST API development.
    </p>

    <p className="location">
      CGPA: 8.72 | Hyderabad, Telangana
    </p>

    <div className="hero-buttons">
      <a href="/resume.pdf" target="_blank" rel="noreferrer">
        Resume
      </a>

      <a
        href="https://github.com/VajralaYashwanthReddy"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>

      <a
        href="https://linkedin.com/in/vajrala-yashwanth-reddy"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
    </div>
  </div>
</section>

      {/* Skills */}
      <Section title="Technical Skills">
        <div style={grid}>
          {skills.map((skill) => (
            <div key={skill} style={card}>
              {skill}
            </div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section title="Internship Experience">
  <div style={projectCard}>
    <h2 style={{ color: "#38bdf8" }}>
      🚀 AutoObserver – AI/ML Model Building Team Intern
<p style={{ color: "#94a3b8" }}>
  Mar 2026 – May 2026 | Remote
</p>
    </h2>

    <p style={{ lineHeight: "1.8",fontSize:"20px" }}>
      Completed a remote internship in the AI/ML Model Building
      Team, gaining practical exposure to modern software
      development and infrastructure technologies.
    </p>

    <ul style={{ lineHeight: "2",fontSize:"20px" }}>
      <li>
        Worked with Docker and Podman for containerized application deployment.
      </li>

      <li>
        Learned Kubernetes fundamentals including Pods,
        Deployments and Services.
      </li>

      <li>
        Explored observability concepts such as logs,
        metrics and monitoring.
      </li>

      <li>
        Gained hands-on experience with Linux environments,
        troubleshooting and system operations.
      </li>

      <li>
        Collaborated on AI/ML infrastructure workflows and
        development best practices.
      </li>
    </ul>

    <p>
      <strong>Technologies:</strong> Docker, Podman,
      Kubernetes, Linux, Observability, AI/ML Infrastructure
    </p>
  </div>
</Section>

      {/* Projects */}
      <Section title="Featured Projects">
        <div style={projectCard}>
          <h2 style={{ color: "#38bdf8", marginBottom: "10px" }}>
            💳 Digital Wallet System
          </h2>

          <p style={{ lineHeight: "1.8" }}>
            Developed a secure PhonePe-style digital wallet application
            with user authentication, wallet management, money transfer
            functionality and transaction history tracking.
          </p>

          <p>
            <strong>Tech Stack:</strong> Spring Boot, React, MySQL,
            JWT Authentication, Swagger
          </p>

          <div style={{ marginTop: "15px" }}>
            <a
              href="https://github.com/VajralaYashwanthReddy/digital-wallet-springboot-react"
              target="_blank"
              rel="noreferrer"
              style={btnBlue}
            >
              View Code
            </a>
          </div>
        </div>

        <div style={projectCard}>
          <h2 style={{ color: "#38bdf8", marginBottom: "10px" }}>
            📈 Stock Trading Platform
          </h2>

          <p style={{ lineHeight: "1.8" }}>
            Built a full-stack stock trading platform that allows users
            to manage portfolios, buy and sell stocks, track investments,
            and monitor transaction history through a responsive dashboard.
          </p>

          <p>
            <strong>Tech Stack:</strong> Spring Boot, React, MySQL,
            REST APIs
          </p>

          <div style={{ marginTop: "15px" }}>
            <a
              href="https://github.com/VajralaYashwanthReddy/fullstack-stock-trading-app"
              target="_blank"
              rel="noreferrer"
              style={btnBlue}
            >
              View Code
            </a>
          </div>
        </div>
      </Section>

      {/* Certifications */}
      <Section title="Certifications">
        <ul>
          <li>AWS Academy Cloud Foundations</li>
          <li>NPTEL Software Project Management</li>
          <li>Java Full Stack Virtual Internship</li>
          <li>DevOps & Cloud Automation Internship</li>
        </ul>
      </Section>

      {/* Education */}
      <Section title="Education">
        <div style={card}>
          <h3>Malla Reddy University</h3>
          <p>B.Tech - Computer Science Engineering</p>
          <p>CGPA: 8.72</p>
        </div>
      </Section>

      {/* Contact */}
      <Section title="Contact">
        <p>Email: yashwanthvajrala7995@gmail.com</p>
        <p>Hyderabad, Telangana</p>
      </Section>

      <footer
        style={{
          textAlign: "center",
          padding: "30px",
          marginTop: "50px",
        }}
      >
        © 2026 Vajrala Yashwanth Reddy
      </footer>
    </div>


  );
}

function Section({ title, children }) {
  return (
    <section
      style={{
        maxWidth: "1800px",
        width: "95%",
        margin: "auto",
        padding: "30px",
      }}
    >
      <h2
        style={{
          color: "#38bdf8",
          marginBottom: "20px",
        }}
      >
        {title}
      </h2>

      {children}
    </section>
  );
}

const card = {
  background: "#1e293b",
  padding: "20px",
  borderRadius: "12px",
  marginBottom: "15px",
};

const projectCard = {
  background: "#1e293b",
  padding: "30px",
  borderRadius: "18px",
  marginBottom: "25px",
  border: "1px solid #334155",
  boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))",
  gap: "15px",
};

const btnRed = {
  background: "#ef4444",
  color: "white",
  padding: "12px 20px",
  textDecoration: "none",
  borderRadius: "8px",
  margin: "5px",
};

const btnGreen = {
  background: "#22c55e",
  color: "white",
  padding: "12px 20px",
  textDecoration: "none",
  borderRadius: "8px",
  margin: "5px",
};

const btnBlue = {
  background: "#2563eb",
  color: "white",
  padding: "12px 20px",
  textDecoration: "none",
  borderRadius: "8px",
  margin: "5px",
};




export default App;