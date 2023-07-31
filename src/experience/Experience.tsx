import React from "react"
import "./experience.css"
import { BsCircleFill } from "react-icons/bs"

interface Experiences {
  company: string
  companyURL: string
  date: string
  highlights: string[]
}

const experiences: Experiences[] = [
  {
    company: "Anduril",
    companyURL: "https://www.anduril.com/",
    date: "04/2023 - 07/2023",
    highlights: [
      "Effectively and timely acclimated to enterprise-level codebase and delivered two huge projects on accelerated timelines.",
      "Made sure features landed well by scoping the project, and keeping Project Managers, designers, and relevant customers updated about my progress. This included negotiating deviating from certain feature requests and asking clarifying questions about vague details.",
      "Work recognized and praised by colleagues and also engineers that worked in different departments.",
    ],
  },
  {
    company: "Neatleaf",
    companyURL: "https://neatleaf.com/",
    date: "08/2022 - 03/2023",
    highlights: [
      "Implemented new pages and features for the various products. This included a live video streaming service as well as creating a configuration auto-formatting page that took in code and sent to the backend.",
      "Thoroughly tested and researched mulitple charting libraries before making a decision on the future charting technology the company would use.",
    ],
  },
]

const Experience: React.FC = () => {
  return (
    <section id="experience" className={"experience"}>
      <h5>My work history</h5>
      <h2>Experience</h2>

      <div className="container experience__container">
        {experiences.map((exp) => (
          <div className="experience__item">
            <div className="experience__head">
              <h3>
                <a
                  className="experience__anchor"
                  href={exp.companyURL}
                  target="_blank"
                >
                  {exp.company}
                </a>
              </h3>
              <h5>{exp.date}</h5>
            </div>

            <ul className="experience__list">
              {exp.highlights.map((highlight, i) => (
                <li key={i} className="experience__list-item">
                  <BsCircleFill className="experience__list-icon" />
                  <p>{highlight}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
