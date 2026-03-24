import { useState } from "react";

const educationItems = [
  {
    value: "edu-1",
    title: "MSc IT Master Degree",
    period: "2010 - 2012",
    description:
      "Harvard University is an educational institution that offers graduate, professional, and research programs in the fields of and public health.",
    location: "Harvard University, Cambridge, MA, United States",
    tags: [],
    defaultOpen: true,
  },
  {
    value: "edu-2",
    title: "BCA college complete course",
    period: "2007 - 2010",
    description: "",
    location: "",
    tags: [],
    defaultOpen: false,
  },
  {
    value: "edu-3",
    title: "High / Higher secondary school",
    period: "1999 - 2007",
    description: "",
    location: "",
    tags: [],
    defaultOpen: false,
  },
];

const experienceItems = [
  {
    value: "exp-1",
    title: "ABC themes - Web Design IT Company",
    period: "2020 - 2021",
    description: "· Delivered quality code by applying the best development practices",
    location: "A-000 Chambers Street, Suite z-701 New York, NY 10007, United States",
    tags: ["ANGULAR", "REACT", "PYTHON"],
    defaultOpen: true,
  },
  {
    value: "exp-2",
    title: "DEF Themes - Creative full stack web design & development",
    period: "2016 - 2019",
    description: "",
    location: "",
    tags: [],
    defaultOpen: false,
  },
  {
    value: "exp-3",
    title: "GHI Themes - Web & App IT Company",
    period: "2013 - 2016",
    description: "",
    location: "",
    tags: [],
    defaultOpen: false,
  },
];

function TimelineAccordion({ items }) {
  const [openItem, setOpenItem] = useState(
    items.find((i) => i.defaultOpen)?.value || null
  );

  const toggle = (value) => {
    setOpenItem((prev) => (prev === value ? null : value));
  };

  return (
    <div className="timeline-list">
      {items.map((item) => {
        const isOpen = openItem === item.value;
        return (
          <div key={item.value} className={`timeline-item ${isOpen ? "open" : ""}`}>
            <div className="timeline-header" onClick={() => toggle(item.value)}>
              <div className="timeline-icon">{isOpen ? "—" : "+"}</div>
              <span className="timeline-title">{item.title}</span>
              <span className="timeline-period">{item.period}</span>
            </div>
            {isOpen && (item.description || item.location || item.tags.length > 0) && (
              <div className="timeline-content">
                {item.description && (
                  <p className="timeline-desc">{item.description}</p>
                )}
                {item.location && (
                  <p className="timeline-location">{item.location}</p>
                )}
                {item.tags.length > 0 && (
                  <div className="timeline-tags">
                    {item.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function SectionCard({ icon, label, items }) {
  return (
    <div className="section-card">
      <div className="section-left">
        <div className="section-icon">{icon}</div>
        <span className="section-label">{label}</span>
      </div>
      <div className="section-right">
        <TimelineAccordion items={items} />
      </div>
    </div>
  );
}

export default function EducationExperience() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

        .edu-exp-wrapper {
          background: #0e1117;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 60px 24px 80px;
          font-family: 'DM Sans', sans-serif;
          color: #d0d6e0;
        }

        .section-badge {
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #6ee7d4;
          border: 1px solid #6ee7d455;
          padding: 4px 14px;
          border-radius: 20px;
          margin-bottom: 20px;
          background: #6ee7d410;
        }

        .main-heading {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(28px, 4vw, 42px);
          color: #eef0f5;
          text-align: center;
          margin: 0 0 14px;
          font-weight: 400;
          letter-spacing: -0.01em;
        }

        .main-sub {
          font-size: 14px;
          color: #7a8499;
          text-align: center;
          max-width: 460px;
          line-height: 1.7;
          margin: 0 0 52px;
        }

        .cards-wrapper {
          display: flex;
          flex-direction: column;
          gap: 24px;
          width: 100%;
          max-width: 820px;
        }

        .section-card {
          background: #161b26;
          border: 1px solid #252d3d;
          border-radius: 14px;
          display: flex;
          overflow: hidden;
        }

        .section-left {
          width: 160px;
          min-width: 160px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 14px;
          padding: 32px 16px;
          border-right: 1px solid #252d3d;
          background: #13181f;
        }

        .section-icon img, .section-icon svg {
          width: 80px;
          height: 80px;
          opacity: 0.85;
        }

        .section-label {
          font-size: 13px;
          font-weight: 500;
          color: #c8cdd8;
          letter-spacing: 0.03em;
        }

        .section-right {
          flex: 1;
          padding: 8px 0;
        }

        .timeline-list {
          display: flex;
          flex-direction: column;
        }

        .timeline-item {
          border-bottom: 1px solid #1e2535;
          transition: background 0.2s;
        }

        .timeline-item:last-child {
          border-bottom: none;
        }

        .timeline-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 24px;
          cursor: pointer;
          user-select: none;
          transition: background 0.15s;
        }

        .timeline-header:hover {
          background: #1c2333;
        }

        .timeline-icon {
          font-size: 16px;
          color: #6ee7d4;
          width: 18px;
          flex-shrink: 0;
          font-weight: 300;
          line-height: 1;
        }

        .timeline-title {
          flex: 1;
          font-size: 13.5px;
          font-weight: 400;
          color: #c8d0df;
        }

        .timeline-item.open .timeline-title {
          color: #eef0f5;
          font-weight: 500;
        }

        .timeline-period {
          font-size: 12px;
          color: #6ee7d4;
          font-weight: 500;
          letter-spacing: 0.04em;
          flex-shrink: 0;
        }

        .timeline-content {
          padding: 4px 24px 20px 54px;
          animation: fadeIn 0.2s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .timeline-desc {
          font-size: 13px;
          color: #8a97ae;
          line-height: 1.65;
          margin: 0 0 10px;
        }

        .timeline-desc span {
          color: #6ee7d4;
        }

        .timeline-location {
          font-size: 12.5px;
          font-weight: 600;
          color: #c0c8d8;
          margin: 0 0 12px;
        }

        .timeline-tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .tag {
          font-size: 10px;
          letter-spacing: 0.1em;
          font-weight: 600;
          color: #9ab0c8;
          border: 1px solid #2a3548;
          padding: 3px 10px;
          border-radius: 4px;
          background: #1a2234;
          text-transform: uppercase;
        }

        /* SVG Illustrations */
        .edu-illustration, .exp-illustration {
          width: 88px;
          height: 88px;
        }
      `}</style>

      <div className="edu-exp-wrapper">
        <div className="section-badge">LIFE TIME</div>
        <h2 className="main-heading">Education &amp; Experience</h2>
        <p className="main-sub">
          We craft digital, graphic and dimensional thinking, to create category
          leading brand experiences that have meaning.
        </p>

        <div className="cards-wrapper">
          <SectionCard
            label="Education"
            items={educationItems}
            icon={
              <svg className="edu-illustration" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="44" cy="44" r="44" fill="#1a2234"/>
                <rect x="22" y="30" width="44" height="32" rx="3" fill="#2a3a56" stroke="#3a5070" strokeWidth="1"/>
                <rect x="26" y="34" width="16" height="20" rx="1.5" fill="#1e2e45"/>
                <rect x="46" y="34" width="16" height="20" rx="1.5" fill="#1e2e45"/>
                <path d="M44 30 L44 62" stroke="#3a5070" strokeWidth="1"/>
                <path d="M30 48 L38 44 L30 40" stroke="#6ee7d4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M50 44 L58 44" stroke="#6ee7d4" strokeWidth="1.2" strokeLinecap="round"/>
                <path d="M50 48 L55 48" stroke="#6ee7d470" strokeWidth="1.2" strokeLinecap="round"/>
                <ellipse cx="44" cy="64" rx="12" ry="2" fill="#2a3a56" opacity="0.5"/>
                <path d="M36 64 L44 60 L52 64" stroke="#3a5070" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          />

          <SectionCard
            label="Experience"
            items={experienceItems}
            icon={
              <svg className="exp-illustration" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="44" cy="44" r="44" fill="#1a2234"/>
                <rect x="20" y="54" width="10" height="16" rx="1.5" fill="#2a3a56" stroke="#3a5070" strokeWidth="1"/>
                <rect x="34" y="44" width="10" height="26" rx="1.5" fill="#2a3a56" stroke="#3a5070" strokeWidth="1"/>
                <rect x="48" y="36" width="10" height="34" rx="1.5" fill="#2a3a56" stroke="#3a5070" strokeWidth="1"/>
                <rect x="62" y="26" width="10" height="44" rx="1.5" fill="#6ee7d430" stroke="#6ee7d4" strokeWidth="1"/>
                <path d="M22 50 L36 38 L50 30 L64 20" stroke="#6ee7d4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 2"/>
                <circle cx="64" cy="20" r="3" fill="#6ee7d4"/>
              </svg>
            }
          />
        </div>
      </div>
    </>
  );
}