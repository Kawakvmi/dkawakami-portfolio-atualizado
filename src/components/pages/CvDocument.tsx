import { cv } from "@/data/cv";
import { CvToolbar } from "./CvToolbar";

const PDF_HREF = "/dereck-kawakami-cv.pdf";

export function CvDocument() {
  return (
    <div className="cv-viewport">
      <CvToolbar pdfHref={PDF_HREF} />

      <article className="cv-page">
        <header>
          <h1 className="cv-name">{cv.name}</h1>
          <p className="cv-title">{cv.title}</p>
          <div className="cv-contact">
            <span>{cv.contact.age}</span>
            <span>{cv.contact.location}</span>
            <span>{cv.contact.phone}</span>
            <span>{cv.contact.email}</span>
            <span>{cv.contact.linkedin}</span>
            <span>{cv.contact.github}</span>
          </div>
        </header>

        <p className="cv-lead">{cv.objective}</p>

        <div className="cv-grid">
          {/* Main column */}
          <div>
            <section className="cv-section">
              <h2 className="cv-section-title">Experiência</h2>
              <div className="cv-rule" />
              {cv.experience.map((job) => (
                <div key={job.company} className="cv-item">
                  <div className="cv-item-head">
                    <div>
                      <span className="cv-role">{job.role}</span>
                      <span className="cv-org"> · {job.company}</span>
                    </div>
                    <span className="cv-period">{job.period}</span>
                  </div>
                  <ul className="cv-bullets">
                    {job.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <section className="cv-section">
              <h2 className="cv-section-title">Formação</h2>
              <div className="cv-rule" />
              {cv.education.map((ed) => (
                <div key={ed.course} className="cv-item">
                  <div className="cv-item-head">
                    <div>
                      <span className="cv-role">{ed.course}</span>
                      {ed.highlight && (
                        <span className="cv-badge">Front-End</span>
                      )}
                      <div className="cv-org">{ed.school}</div>
                    </div>
                    <span className="cv-period">{ed.period}</span>
                  </div>
                  {"detail" in ed && ed.detail && (
                    <ul className="cv-bullets">
                      <li>{ed.detail}</li>
                    </ul>
                  )}
                </div>
              ))}
            </section>
          </div>

          {/* Aside column */}
          <aside>
            <section className="cv-section">
              <h2 className="cv-section-title">Habilidades</h2>
              <div className="cv-rule" />
              {cv.skillGroups.map((group) => (
                <div key={group.label} className="cv-item">
                  <p className="cv-skill-label">{group.label}</p>
                  <div className="cv-chips">
                    {group.items.map((item) => (
                      <span key={item} className="cv-chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            <section className="cv-section">
              <h2 className="cv-section-title">Certificações</h2>
              <div className="cv-rule" />
              {cv.certifications.map((cert) => (
                <div key={cert.name} className="cv-cert">
                  {cert.highlight && (
                    <span aria-hidden className="cv-cert-star">
                      ★
                    </span>
                  )}
                  <span>
                    {cert.name}
                    <span className="cv-org"> · {cert.issuer}</span>
                  </span>
                </div>
              ))}
            </section>
          </aside>
        </div>
      </article>
    </div>
  );
}
