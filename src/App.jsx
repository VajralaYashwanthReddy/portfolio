
import profile from "./assets/profile.jpg";

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
      <section
  style={{
    maxWidth: "1300px",
    width: "95%",
    margin: "0 auto",
    padding: "80px 20px",
    display: "flex",
    alignItems: "center",
    gap: "60px",
  }}
>
        <img
          src={profile}
          alt="Profile"
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "20px",
            marginRight: "50px",
            objectFit: "cover",
            border: "5px solid #38bdf8",
            boxShadow: "0 0 25px rgba(56,189,248,0.5)",
          }}
        />

        <div
  style={{
    flex: 1,
  }}
>
          <h1
  style={{
    fontSize: "58px",
    marginBottom: "15px",
    lineHeight: "1.1",
  }}
>
            Vajrala Yashwanth Reddy
          </h1>

          <h2
            style={{
              color: "#38bdf8",
              marginBottom: "20px",
            }}
          >
            Full Stack Developer | Java | Spring Boot | React | Docker
          </h2>

          <p
  style={{
    fontSize: "18px",
    lineHeight: "1.8",
    maxWidth: "850px",
  }}
>
  Final Year Computer Science Engineering student at Malla Reddy University
  with hands-on experience in Full Stack Development, Java, Spring Boot,
  React, MySQL, Docker and REST API development. Passionate about building
  scalable software solutions and continuously learning modern technologies.
</p>

          <p
            style={{
              color: "#94a3b8",
              marginBottom: "20px",
            }}
          >
            CGPA: 8.72 | Hyderabad, Telangana
          </p>

          <div>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              style={btnRed}
            >
              Resume
            </a>

            <a
              href="https://github.com/VajralaYashwanthReddy"
              target="_blank"
              rel="noreferrer"
              style={btnGreen}
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/vajrala-yashwanth-reddy"
              target="_blank"
              rel="noreferrer"
              style={btnBlue}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <Section title="About Me">
  <p
    style={{
      lineHeight: "1.8",
      fontSize: "20px",
    }}
  >
    Hello! I'm Vajrala Yashwanth Reddy, a Final Year Computer
    Science Engineering student at Malla Reddy University.

    <br /><br />

    I specialize in Java Full Stack Development with hands-on
    experience in Spring Boot, React, MySQL, Docker and REST API
    development. I have worked on projects such as Digital Wallet
    Systems, Stock Trading Platforms and Health Record Management
    Systems.

    <br /><br />

    Currently, I am enhancing my skills through internships and
    practical projects while exploring cloud technologies,
    DevOps practices and scalable software architecture.

    <br /><br />

    My goal is to start my career as a Software Engineer and
    contribute to building impactful products that solve
    real-world challenges.
  </p>
</Section>

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