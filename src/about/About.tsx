import React from "react"
import "./about.css"
import { FaMedal, FaVolleyballBall } from "react-icons/fa"
import { MdPets } from "react-icons/md"

const About: React.FC<{}> = ({}) => {
  return (
    <section id="about" className={"about"}>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src="skatingPic.jpg" alt="Skating Image" />
          </div>
          <div className="about__me-image-text">
            <small>Photo by Thomas Di Nardo</small>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaMedal className="about__icon" />
              <h5>Sports Accomplishments</h5>
              <small>Team USA Olympian</small>
            </article>
            <article className="about__card">
              <MdPets className="about__icon" />
              <h5>Loves</h5>
              <small>Animals</small>
            </article>
            <article className="about__card">
              <FaVolleyballBall className="about__icon" />
              <h5>Hobby</h5>
              <small>Volleyball</small>
            </article>
          </div>
          <p className="about__content">
            My drive and dedication while I was an Olympic-level athlete is now
            directed towards my passion for software engineering. My technical
            and collaboration skills have reached new heights throughout my
            professional positions as a software engineer. I intend to continue
            to aim towards the pinnacle of software development as I eagerly
            absorb as much information as I can from others and available
            resources everyday! I am excited to work with the brightest
            engineers and business owners I can. Reach out if you're interested
            in chatting!
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
