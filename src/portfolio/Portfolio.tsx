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

const data: Data[] = [
  {
    id: 1,
    video: "mern-finance-social.mp4",
    title: "MERN Finance Social App",
    github: "https://github.com/AaronTran206/MERN-finance-social-media-site",
    demo: "https://mern-financial-social-media.web.app/",
    description: [
      "Used the MERN stack in combination with Material UI to build a Social media site where people can search tickers and post about their financial opinions!",
      "Other notable technologies used include React Navigation, React-Redux, and React Charts.",
    ],
  },

  {
    id: 2,
    video: "lolteamrandomizer.mov",
    title: "LoL In-House Team Randomizer",
    github: "https://github.com/AaronTran206/LoLTeamRandomizer",
    demo: "https://lolteamrandomizer.web.app/",
    description: [
      "Used to React Redux, Bootstrap, and Sass to make a better alternative for my friends and I to randomize team matches.",
      "Added in extra features such as drag-and-drop, and custom gamemodes to support interesting and unique game nights.",
    ],
  },
  {
    id: 3,
    video: "japaneseExt.mp4",
    title: "Japanese Dictionary Extension",
    github: "https://github.com/AaronTran206/japanese-extension",
    demo: "",
    description: [
      "Used React, and Typescript to create the frontend for a Japanese dictionary app that takes in an input, an English word, a Japanese word, or a Japanese sentence, and returns the corresponding Japanese word from backend database.",
      "Implemented own backend server with NodeJS and ExpressJS to host the database of Japanese words.",
    ],
  },
  {
    id: 4,
    video: "teslaClone.mp4",
    title: "Tesla Clone App",
    github: "https://github.com/AaronTran206/TelsaClone",
    demo: "",
    description: ["Used React Native to create a copy of Tesla's mobile app."],
  },
  {
    id: 5,
    video: "weatherExt.mp4",
    title: "Weather Extension",
    github: "https://github.com/AaronTran206/weather-extension",
    demo: "",
    description: [
      "Used React and Typescript to make a Google Extension app that shows weather data for cities that were input. Users can also set home cities which will provide better user experience and higher functionality.",
    ],
  },
]

const Portfolio: React.FC<{}> = ({}) => {
  return (
    <section id="portfolio" className={"portfolio"}>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((proj) => (
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
              {proj.demo && (
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
