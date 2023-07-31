import React from "react"
import ReactDOM from "react-dom"
import "./app.css"
import Nav from "../nav/Nav"
import Header from "../header/Header"
import Portfolio from "../portfolio/Portfolio"
import Services from "../services/Services"
import About from "../about/About"
import Testimonial from "../testimonial/Testimonial"
import Footer from "../footer/Footer"
import Contact from "../contact/Contact"
import Experience from "../experience/Experience"

const App: React.FC<{}> = ({}) => {
  return (
    <>
      <Header />
      <Nav />
      <Experience />
      <Portfolio />
      <Services />
      <About />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  )
}

const root = document.createElement("div")
document.body.appendChild(root)
ReactDOM.render(<App />, root)
