import { useState } from "react";

const educationItems = [
  {
    value: "edu-1",
    title: " Master Degree",
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
      

      <div className="edu-exp-wrapper">
        <div className="section-badge">LIFE TIME</div>
        <h2 className="main-heading font-roboto">Education & Experience</h2>
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