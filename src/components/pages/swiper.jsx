import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/main.css";

import { Navigation} from "swiper";




export default function sw1() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          }
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide >
        <a class='myCard text-decoration-none' href="https://bc-music-generator.herokuapp.com/">
            <div class="img" id="p1"></div>
            <div class="text">Project 1: Bc-Music</div>
        </a>
        </SwiperSlide>

        <SwiperSlide>
        <a class='myCard text-decoration-none' href="https://github.com/Hpyorange/weatherDashboard">
            <div class="img" id="p2"></div>
            <div class="text">Project 2: Weather Dashboard</div>
        </a>
        </SwiperSlide>

        <SwiperSlide>
        <a class='myCard text-decoration-none' href="https://github.com/Hpyorange/JATE-Text-Editor">
            <div class="img" id="p3"></div>
            <div class="text">Project 3: Text-Editor(J.A.T.E)</div>
        </a>
        </SwiperSlide>

        <SwiperSlide>
        <a class='myCard text-decoration-none' href="https://github.com/Hpyorange/CodeQuiz">
            <div class="img" id="p4"></div>
            <div class="text">Project 4: Code Quiz</div>
        </a>
        </SwiperSlide>

        <SwiperSlide>
        <a class='myCard text-decoration-none' href="https://github.com/Hpyorange/employeeTracker">
            <div class="img" id="p5"></div>
            <div class="text">Project 5: Employee Tracker</div>
        </a>
        </SwiperSlide>

        <SwiperSlide>
        <a class='myCard text-decoration-none' href="https://jaspercyz.com">
            <div class="img" id="p6"></div>
            <div class="text">Project 6: my website</div>
        </a>
        </SwiperSlide>


      </Swiper>
    </>
  );
}
