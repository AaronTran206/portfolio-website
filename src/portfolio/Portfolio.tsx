import React from "react"
import "./portfolio.css"

interface Data {
  id: number
  video: string
  title: string
  github: string
  demo: string
}

const data = [
  {
    id: 1,
    video: "teslaClone.mp4",
    title: "Tesla Clone App",
    github: "https://github.com/AaronTran206/TelsaClone",
    demo: "",
  },
  {
    id: 2,
    video: "mobileCatFactsApp.mp4",
    title: "Mobile Cat Facts Applicataion",
    github: "https://github.com/AaronTran206/mobileCatApp",
    demo: "",
  },
  {
    id: 3,
    video: "japaneseExt.mp4",
    title: "Japanese Dictionary Extension",
    github: "https://github.com/AaronTran206/japanese-extension",
    demo: "",
  },
  {
    id: 4,
    video: "weatherExt.mp4",
    title: "Weather Extension",
    github: "https://github.com/AaronTran206/weather-extension",
    demo: "",
  },
  {
    id: 5,
    video: "forkify.mp4",
    title: "Forkify App",
    github: "https://github.com/AaronTran206/forkify-app",
    demo: "https://forkify-aaron-tran.netlify.app/",
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
            <h3>{proj.title}</h3>
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
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
