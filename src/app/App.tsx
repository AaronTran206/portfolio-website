import React from "react"
import ReactDOM from "react-dom"
import "./app.css"
import Nav from "../nav/Nav"
import Header from "../header/Header"
import Portfolio from "../portfolio/Portfolio"
import About from "../about/About"
import Experience from "../experience/Experience"
import Footer from "../footer/Footer"
import Contact from "../contact/Contact"

const App: React.FC<{}> = ({}) => {
  return (
    <>
      <Header />
      <Nav />
      <Portfolio />
      <About />
      <Experience />
      <Footer />
      <Contact />
    </>
  )
}

const root = document.createElement("div")
document.body.appendChild(root)
ReactDOM.render(<App />, root)
