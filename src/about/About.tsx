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
            My experience as an Olympic-level athlete allowed me to gain strong
            interpersonal and communication skills when working with some of the
            brightest and most dedicated people in the country; which also
            allows me to thrive in a professional environment. However, I also
            believe that life is too short. I believe that it is just as
            important to "stop and smell the roses" as it is to spend time
            honing your craft.
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
