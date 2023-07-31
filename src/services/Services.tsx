import React from "react"
import "./services.css"
import { BsCheckLg } from "react-icons/bs"

const frontendData = [
  { service: "TypeScript" },
  { service: "ReactJS" },
  { service: "HTML" },
  { service: "CSS" },
  { service: "Redux" },
  { service: "Sass" },
  { service: "Bootstrap" },
  { service: "React Native" },
]
const backendData = [
  { service: "NodeJS" },
  { service: "Express" },
  { service: "MongoDB" },
  { service: "GraphQL" },
  { service: "SQL" },
  { service: "Python" },
]

const Services: React.FC<{}> = ({}) => {
  return (
    <section id="services" className={"services"}>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Frontend Skills</h3>
          </div>

          <ul className="service__list">
            {frontendData.map((arr, i) => (
              <li key={i}>
                <BsCheckLg className="service__list-icon" />
                <p>{arr.service}</p>
              </li>
            ))}
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Backend Skills</h3>
          </div>

          <ul className="service__list">
            {backendData.map((arr, i) => (
              <li key={i}>
                <BsCheckLg className="service__list-icon" />
                <p>{arr.service}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
