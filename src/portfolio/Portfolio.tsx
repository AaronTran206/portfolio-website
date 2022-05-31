import React from "react"
import "./portfolio.css"
import { BsCircleFill } from "react-icons/bs"

interface Data {
  id: number
  video: string
  title: string
  github: string
  demo: string
  description: string[]
}

const data = [
  {
    id: 1,
    video: "lolteamrandomizer.mov",
    title: "LoL In-House Team Randomizer",
    github: "https://github.com/AaronTran206/LoLTeamRandomizer",
    demo: "https://lolteamrandomizer.web.app/",
    description: [
      "Learned React Redux to persist player states that can be easily accessible by other components.",
      "Learned Bootstrap and Sass to create a site that provides great user-experience and responsiveness.",
      "Integrated other libraries for the first-time for greater user-experience such as: Toastify, and React-DnD.",
    ],
  },
  {
    id: 2,
    video: "mobileCatFactsApp.mp4",
    title: "Mobile Cat Facts Applicataion",
    github: "https://github.com/AaronTran206/mobileCatApp",
    demo: "",
    description: [
      "Learned React Native to create a small mobile application that fetches API data about cat facts.",
      "Implemented React Navigation for the first time to include pagination within the app.",
      "Experienced with React Native styling to make a more appealing design.",
    ],
  },
  {
    id: 3,
    video: "japaneseExt.mp4",
    title: "Japanese Dictionary Extension",
    github: "https://github.com/AaronTran206/japanese-extension",
    demo: "",
    description: [
      "First React project that I started and completed on my own.",
      "Implemented own backend server with NodeJS and ExpressJS to host the database of Japanese words.",
      "Experimented with card states and rendering behavior.",
    ],
  },
  {
    id: 4,
    video: "teslaClone.mp4",
    title: "Tesla Clone App",
    github: "https://github.com/AaronTran206/TelsaClone",
    demo: "",
    description: [
      "First React Native project that taught me the bare basics of mobile development.",
      "Exposed to React Native styling syntax.",
    ],
  },
  {
    id: 5,
    video: "weatherExt.mp4",
    title: "Weather Extension",
    github: "https://github.com/AaronTran206/weather-extension",
    demo: "",
    description: [
      "Learned React and TypeScript through this project.",
      "Exposed to typing of TypeScript.",
      "Exposed to component structure of React.",
    ],
  },
  {
    id: 6,
    video: "forkify.mp4",
    title: "Forkify App",
    github: "https://github.com/AaronTran206/forkify-app",
    demo: "https://forkify-aaron-tran.netlify.app/",
    description: [
      "Project that taught me the basics of JavaScript.",
      "Exposed to MVC structure of code and how it could benefit the overall scalability of bigger projects.",
    ],
  },
]

const Portfolio: React.FC<{}> = ({}) => {
  return (
    <section id="portfolio" className={"portfolio"}>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((proj: Data) => (
          <article className="portfolio__item" key={proj.id}>
            <div className="portfolio__item-video">
              <video controls muted>
                <source src={proj.video} type="video/mp4" />
              </video>
            </div>
            <h3 className="portfolio__item-title">{proj.title}</h3>
            <div className="portfolio__item-cta">
              <a href={proj.github} className="btn" target="_blank">
                Github
              </a>
              {proj.demo === "" ? (
                ""
              ) : (
                <a href={proj.demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              )}
            </div>
            {proj.description.map((str, i) => (
              <div key={i} className="portfolio__item-description">
                <BsCircleFill className="portfolio__item-bullet-icon" />
                {str}
              </div>
            ))}
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
