import React from "react"
import "./testimonial.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const Testimonial: React.FC<{}> = ({}) => {
  const data = [
    {
      name: "Aaron Tran",
      linkedin: "https://www.linkedin.com/in/tran-aaron/",
      picture: "babyAaron.jpeg",
      testimonial:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ipsa cumque mollitia quam ipsam alias laboriosam vel, rem maxime nulla vitae quia magnam illo totam minus architecto, soluta quo ut?",
    },
    {
      name: "Aaron Tran",
      linkedin: "https://www.linkedin.com/in/tran-aaron/",
      picture: "babyAaron.jpeg",
      testimonial:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ipsa cumque mollitia quam ipsam alias laboriosam vel, rem maxime nulla vitae quia magnam illo totam minus architecto, soluta quo ut?",
    },
    {
      name: "Aaron Tran",
      linkedin: "https://www.linkedin.com/in/tran-aaron/",
      picture: "babyAaron.jpeg",
      testimonial:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ipsa cumque mollitia quam ipsam alias laboriosam vel, rem maxime nulla vitae quia magnam illo totam minus architecto, soluta quo ut?",
    },
    {
      name: "Aaron Tran",
      linkedin: "https://www.linkedin.com/in/tran-aaron/",
      picture: "babyAaron.jpeg",
      testimonial:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ipsa cumque mollitia quam ipsam alias laboriosam vel, rem maxime nulla vitae quia magnam illo totam minus architecto, soluta quo ut?",
    },
    {
      name: "Aaron Tran",
      linkedin: "https://www.linkedin.com/in/tran-aaron/",
      picture: "babyAaron.jpeg",
      testimonial:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ipsa cumque mollitia quam ipsam alias laboriosam vel, rem maxime nulla vitae quia magnam illo totam minus architecto, soluta quo ut?",
    },
  ]

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
            <h5>{user.name}</h5>
            <small className="client__testimonial">{user.testimonial}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonial
