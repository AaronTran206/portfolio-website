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
    video: "mern-finance-social.mp4",
    title: "MERN Finance Social App",
    github: "https://github.com/AaronTran206/MERN-finance-social-media-site",
    demo: "https://mern-financial-social-media.web.app/",
    description: [
      "Social media site where people can search tickers and post about their financial opinions!",
      "I built this project to further my knowledge of MongoDB, Express, Node, and Material UI. Learning about authentication and backend querying was a big task of this project. In particular, the nested comment structure that maintained reply, edit, delete, and like functionality was challenging.",
      "Technologies used include MongoDB, Express, React, Node, MUI, React Navigation, React-Redux, and React Charts.",
    ],
  },

  {
    id: 2,
    video: "lolteamrandomizer.mov",
    title: "LoL In-House Team Randomizer",
    github: "https://github.com/AaronTran206/LoLTeamRandomizer",
    demo: "https://lolteamrandomizer.web.app/",
    description: [
      "Site where League of Legends players can easily make in-house teams to play against each other in a serious setting or for fun with the included gamemodes and perks.",
      "Learned React Redux to persist player states that can be easily accessible by other components.",
      "Learned Bootstrap, Sass, Toastify, and React-DnD to create a site that provides great user-experience and responsiveness.",
    ],
  },
  {
    id: 3,
    video: "japaneseExt.mp4",
    title: "Japanese Dictionary Extension",
    github: "https://github.com/AaronTran206/japanese-extension",
    demo: "",
    description: [
      "Japanese dictionary app that takes in an input, an English word, a Japanese word, or a Japanese sentence, and returns the corresponding Japanese word from backend database.",
      "First React project that I started and completed on my own.",
      "Implemented own backend server with NodeJS and ExpressJS to host the database of Japanese words.",
    ],
  },
  {
    id: 4,
    video: "teslaClone.mp4",
    title: "Tesla Clone App",
    github: "https://github.com/AaronTran206/TelsaClone",
    demo: "",
    description: [
      "A clone of Tesla's app that doesn't contain any functionality.",
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
      "Google Extension app that shows weather data for cities that were input. Users can also set home cities which will provide better user experience and higher functionality.",
      "Learned React and TypeScript through this project.",
      "Learned about the process of making a Google Extension App using Chrome Developer Tools.",
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
