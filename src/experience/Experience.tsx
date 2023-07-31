import React from "react"
import "./experience.css"
import { BsCircleFill } from "react-icons/bs"
import { FiExternalLink } from "react-icons/fi"

interface Experiences {
  company: string
  title: string
  companyURL: string
  date: string
  highlights: string[]
}

const experiences: Experiences[] = [
  {
    company: "Anduril",
    title: "Software Engineer",
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
    title: "Software Engineer",
    companyURL: "https://neatleaf.com/",
    date: "08/2022 - 03/2023",
    highlights: [
      "Implemented new pages and features for the various products. This included a live video streaming service as well as creating a configuration auto-formatting page that took in code and sent to the backend.",
      "Thoroughly tested and researched mulitple charting libraries before making a decision on the future charting technology the company would use.",
    ],
  },
  {
    company: "US Speedskating",
    title: "Team USA Olympic Athlete",
    companyURL: "https://www.usspeedskating.org/",
    date: "03/2015 - 03/2021",
    highlights: [
      "Set my sights from a young age to accomplish my dream of, not just going, but competing in the Olympic Games for Short Track Speed Skating; which I managed to accomplish in 2018 in Pyeongchang, Korea.",
      "Worked with extraordinary teammates and coaches to become the best version of ourselves that we could be by focusing on collaboration, teamwork, and sacrifice.",
      "I believe no other experience would have given me the emotional, mental, and physical that I have today.",
      `I now apply the philosophy of "playing to win", rather than "playing not to lose", to everything I do.`,
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
          <article className="experience__item">
            <div className="experience__head">
              <div className="experience__company">
                <a
                  href={exp.companyURL}
                  target="_blank"
                  className="experience__anchor"
                >
                  <h3>{exp.company}</h3>
                  <FiExternalLink />
                </a>
                <h5>{exp.date}</h5>
              </div>

              <div className="experience__title">
                <h3>
                  {exp.title}
                  <div className="experience__title-divider" />
                </h3>
              </div>
            </div>

            <ul className="experience__list">
              {exp.highlights.map((highlight, i) => (
                <li key={i} className="experience__list-item">
                  <BsCircleFill className="experience__list-icon" />
                  <p>{highlight}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
