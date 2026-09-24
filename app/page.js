"use client";

import {
  Code2,
  Database,
  Globe,
  Mail,
  Server,
  Wrench,
  ExternalLink,
} from "lucide-react";

const skills = [
  { name: "HTML", icon: Globe },
  { name: "CSS", icon: Code2 },
  { name: "JavaScript", icon: Code2 },
  { name: "React", icon: Code2 },
  { name: "Next.js", icon: Globe },
  { name: "PHP", icon: Server },
  { name: "MySQL", icon: Database },
  { name: "Git", icon: Code2 },
  { name: "REST API", icon: Server },
  { name: "Material UI", icon: Wrench },
];

const services = [
  {
    title: "Web Development",
    description: "Modern and responsive web applications.",
    icon: Globe,
  },
  {
    title: "Backend Development",
    description: "Reliable backend systems and APIs.",
    icon: Server,
  },
  {
    title: "Database Management",
    description: "Structured and efficient database solutions.",
    icon: Database,
  },
  {
    title: "System Development",
    description: "Practical software solutions for real problems.",
    icon: Code2,
  },
];

export default function Home() {
  return (
    <main className="portfolio">
      {/* ================= HERO ================= */}
      <section className="heroSection">
        <div className="heroContent">
          <p className="eyebrow">HELLO, I'M</p>

          <h1>
            Ahmad Abdallah
            <br />
            Khamis
          </h1>

          <h2>Computer Science Student & Software Developer</h2>

          <p className="heroDescription">
            A Computer Science student passionate about software development,
            web technologies, databases, and building practical digital
            solutions.
          </p>

          <div className="heroButtons">
            <a href="#project" className="primaryButton">
              View My Work
              <ExternalLink size={17} />
            </a>

            <a href="#contact" className="secondaryButton">
              Contact Me
              <Mail size={17} />
            </a>
          </div>

          <div className="socialLinks">
            <a
              href="https://github.com/Shihab4099"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a href="mailto:khamisahmad4099@gmail.com">
              <Mail size={19} />
              Email
            </a>
          </div>
        </div>

        <div className="heroImageWrapper">
          <div className="imageFrame">
            <img
              src="/profile.png"
              alt="Ahmad Abdallah Khamis"
              className="profileImage"
            />
          </div>
        </div>
      </section>

      {/* ================= INFORMATION ================= */}
      <section className="informationSection">
        {/* ABOUT */}
        <div className="infoCard">
          <div className="cardHeader">
            <span className="cardNumber">01</span>
            <span className="cardLabel">ABOUT ME</span>
          </div>

          <div className="cardContent">
            <h3>Who I Am</h3>

            <p>
              I am a Computer Science student at the State University of
              Zanzibar (SUZA), pursuing a Diploma in Computer Science. I have a
              strong interest in software development, web technologies, and
              information systems.
            </p>

            <p>
              My goal is to become a professional software developer capable of
              designing and developing reliable solutions for real-world
              problems.
            </p>

            <div className="aboutMeta">
              <div>
                <span>Education</span>
                <strong>Diploma in Computer Science</strong>
              </div>

              <div>
                <span>Institution</span>
                <strong>State University of Zanzibar</strong>
              </div>
            </div>
          </div>
        </div>

        {/* SKILLS */}
        <div className="infoCard">
          <div className="cardHeader">
            <span className="cardNumber">02</span>
            <span className="cardLabel">EXPERTISE</span>
          </div>

          <div className="cardContent">
            <h3>Technical Skills</h3>

            <div className="skillsGrid">
              {skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div className="skillItem" key={skill.name}>
                    <span className="skillIcon">
                      <Icon size={17} strokeWidth={1.8} />
                    </span>

                    <span>{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECT ================= */}
      <section id="project" className="projectSection">
        <div className="sectionHeading">
          <div>
            <span className="sectionNumber">03</span>
            <span className="sectionLabel">FEATURED PROJECT</span>
          </div>
        </div>

        <div className="projectCard">
          <div className="projectInfo">
            <span className="projectTag">FINAL YEAR PROJECT</span>

            <h3>Lost ID and Document Recovery System</h3>

            <p>
              A web-based system designed to help users report lost documents,
              register found documents, identify possible matches, and request
              replacement documents when necessary.
            </p>

            <div className="techList">
              <span>Next.js</span>
              <span>React</span>
              <span>PHP</span>
              <span>MySQL</span>
              <span>Material UI</span>
            </div>

            <div className="projectButtons">
              <a href="#contact" className="primaryButton">
                View Project
                <ExternalLink size={16} />
              </a>

              <a
                href="https://github.com/Shihab4099"
                target="_blank"
                rel="noopener noreferrer"
                className="secondaryButton"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* PROJECT PREVIEW */}
          <div className="projectPreview">
            <div className="browserBar">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="dashboardMockup">
              <div className="mockSidebar">
                <div className="mockLogo"></div>

                <div className="mockNav active"></div>
                <div className="mockNav"></div>
                <div className="mockNav"></div>
                <div className="mockNav"></div>
              </div>

              <div className="mockMain">
                <div className="mockTop">
                  <div className="mockTitle"></div>
                  <div className="mockUser"></div>
                </div>

                <div className="mockCards">
                  <div className="mockCard">
                    <small>Lost Reports</small>
                    <strong>24</strong>
                  </div>

                  <div className="mockCard">
                    <small>Found Reports</small>
                    <strong>18</strong>
                  </div>

                  <div className="mockCard">
                    <small>Matches</small>
                    <strong>12</strong>
                  </div>
                </div>

                <div className="mockTable">
                  <div className="mockTableHeader"></div>

                  <div className="mockRow">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="mockRow">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="mockRow">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EDUCATION & SERVICES ================= */}
      <section className="educationServices">
        {/* EDUCATION */}
        <div className="educationCard">
          <div className="sectionMiniHeader">
            <span className="sectionNumber">04</span>
            <span className="sectionLabel">EDUCATION</span>
          </div>

          <div className="educationContent">
            <div className="educationLogo">
              <img
                src="/suza.png"
                alt="State University of Zanzibar logo"
              />
            </div>

            <div>
              <h3>Diploma in Computer Science</h3>

              <p className="institution">
                State University of Zanzibar (SUZA)
              </p>

              <p className="educationYear">2023 – 2026</p>
            </div>
          </div>
        </div>

        {/* SERVICES */}
        <div className="servicesCard">
          <div className="sectionMiniHeader">
            <span className="sectionNumber">05</span>
            <span className="sectionLabel">WHAT I CAN DO</span>
          </div>

          <div className="servicesGrid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div className="serviceItem" key={service.title}>
                  <div className="serviceIcon">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>

                  <div>
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="contactSection">
        <div className="contactIntro">
          <div className="sectionMiniHeader">
            <span className="sectionNumber">06</span>
            <span className="sectionLabel">CONTACT</span>
          </div>

          <h3>Let’s Connect</h3>

          <p>
            Have a project, opportunity, or idea? Click the button below to
            open Gmail and send me a message.
          </p>

          <div className="contactDetails">
            <a
              href="mailto:khamisahmad4099@gmail.com"
              className="contactDetail"
            >
              <div className="contactDetailIcon">
                <Mail size={18} />
              </div>

              <div>
                <strong>khamisahmad4099@gmail.com</strong>
              </div>
            </a>
          </div>

          {/* GMAIL BUTTON */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=khamisahmad4099@gmail.com"
            className="sendButton"
          >
            <Mail size={17} />
            <span>Send Me a Message</span>
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <p>© 2026 Ahmad Abdallah Khamis. All rights reserved.</p>

        <div className="footerLinks">
          <a
            href="https://github.com/Shihab4099"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a href="mailto:khamisahmad4099@gmail.com">
            <Mail size={18} />
          </a>
        </div>
      </footer>
    </main>
  );
}