import React from "react"
import "./testimonial.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const data = [
  {
    name: "Seung Park",
    linkedin: "https://www.linkedin.com/in/seungquality/",
    picture: "seungPark.jpg",
    testimonial: `"Aaron has proven to be an enthusiastic and proficient UI engineer. He quickly integrated with our team’s map tooling and overhauled the editing workflows for our users. I highly recommend Aaron as an engineer because of his problem solving capability and passion for UI."`,
  },
  {
    name: "Karen Ocwieja",
    linkedin: "https://www.linkedin.com/in/karen-ocwieja-57bb77119/",
    picture: "karenOcwieja.jpg",
    testimonial: `"I've known Aaron Tran since 2015. At that time he was a new member on the US Speedskating Short Track National Team. Over the years I've witnessed the methodical attention Aaron has when pursuing his passion. He is dedicated and hardworking. I fully expect to see those attributes contribute to his success as he pursues software development. He is honest and kind. And I would recommend anyone that has a chance, to take the opportunity to work with him and get to know him."`,
  },
  {
    name: "Thomas Hong",
    linkedin: "https://www.linkedin.com/in/thomasishong/",
    picture: "thomasHong.jpg",
    testimonial: `"I would describe Aaron Tran as resilient, consistent, and gentle. His steady presence always inspired me on our journey to the Olympics. Since retiring from sport, I've learned that Aaron carries his discipline and integrity in every venture he pursues. It is how he leads. I have the utmost confidence that Aaron will field excellence in whatever is next for him.
    "`,
  },
  {
    name: "Jen Jenkins",
    linkedin: "https://www.linkedin.com/in/jenjenkins/",
    picture: "jenJenkins.jpg",
    testimonial: `"It was a pleasure working with Aaron as a web intern for the team. He was dedicated to finishing the work assigned to him and conscientious in its completion. I would recommend Aaron for his hard work any day."`,
  },
]
const Testimonial: React.FC<{}> = ({}) => {
  return (
    <section id="testimonials" className={"testimonials"}>
      <h5>Review from Colleagues and Managers</h5>
      <h2>Testimonials</h2>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        spaceBetween={25}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="container testimonials__container"
      >
        {data.map((user, i) => (
          <SwiperSlide className="testimonials-swiper" key={i}>
            <div className="client__avatar">
              <a href={user.linkedin} target="_blank">
                <img src={user.picture} />
              </a>
            </div>
            <h5 className="testimonials__name">{user.name}</h5>
            <small className="client__testimonial">{user.testimonial}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonial
