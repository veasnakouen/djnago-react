"use client";
import React from "react";
import { Hind } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export default function HomeComponent() {
  var settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 2000, //2s
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    loop: true,
    cssEase: "linear",
    //responsive for all plate form
    responsive: [
      {
        breakpoint: 1760,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1460,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1290,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    //  <React.Fragment></React.Fragment> : <></>
    <>
      <div
        id="home"
        style={{
          backgroundImage:
            "linear-gradient(62deg, #EEF7FB 0 50%, #48AFDE 0% 100%)",
          // "linear-gradient(to right, blue 50%, white 50%)",
          minHeight: "500px",
          maxHeight: "1200px",
          height: "100%",
          width: "100%",
        }}
      >
        <div className="container m-auto">
          <div className="grid grid-cols-12">
            <div className="bg-white flex flex-col justify-center col-span-12 md:col-span-5 md:bg-transparent ">
              <div className="container m-auto">
                <div className="lg:pl-24 sm:pl-10 pl-0 py-20 md:py-0 md:text-start text-center">
                  <p
                    className={`text-[#47AEDE] font-bold font-serif text-3xl md:text-base lg:text-2xl ${hind.className}`}
                  >
                    {" "}
                    Hi there{" "}
                  </p>
                  <h1 className="text-[#223740]  text-5xl md:text-5xl lg:text-7xl xl:text-7xl mt-5 md:mt-3">
                    {`I'm MR.PROG`}
                  </h1>
                  <h2
                    className={`text-[#223740]  py-2 font-bold uppercase md:text-xl ${hind.className}`}
                  >
                    CEO edubaba Digital &amp; an Instructor.
                  </h2>
                  <div className=" flex flex-row justify-center md:justify-start lg:justify-start">
                    <a
                      href="/#portfolio" // link to portfolio component
                      className={`inline-block cursor-pointer bg-[#47AEDE] transition-all duration-300 ease-in-out rounded-lg text-white py-3 px-5 font-bold mt-8 uppercase md:py-2 lg:py-3 lf:px-8 md:text-xl lg:text-base md:mt-5 lg:mt-10 hover:bg-[#223740] hover:shadow-lg transform hover:-translate-y-1 ${hind.className}`}
                    >
                      Project
                    </a>
                    <a
                      href="ehizcv.pdf" // name of your cv
                      download={`resume.pdf`} // and of the file when download
                      className={`ml-5 cursor-pointer inline-block bg-[#223740] transition-all duration-300 ease-in-out rounded-lg text-white py-3 px-5 font-bold mt-8 uppercase md:py-2 lg:py-3 lf:px-8 md:text-xl lg:text-base md:mt-5 lg:mt-10 hover:bg-[#47AEDE] hover:shadow-lg transform hover:-translate-y-1 ${hind.className}`}
                    >
                      My Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 pt-[50px] md:bg-transparent bg-[#d9eef7] md:pt-[130px] md:col-span-7 ">
              <div className="container m-auto ">
                <img src="/ehizeex.png" alt="profile pic" decoding="async" />
              </div>
            </div>
          </div>
          <div className="container m-auto absolute">
            <div className="px-3">
              <div
                className="relative max-w-sm bottom-[70px] md:max-w-5xl xl:max-w-6xl px-5 lg:px-14 overflow-auto mx-auto bg-white rounded-2xl z-20 "
                style={{ boxShadow: "#48AFDE -10px 25px 50px 10px" }}
              >
                <div className="lg:py-10 md:py-6 sm:py-6 cursor-all-scroll ">
                  <Slider {...settings}>
                    <img
                      src="/mongodb.png"
                      alt=" mongodb project"
                      className="h-12"
                    />
                    <img
                      src="/reactjs.png"
                      alt=" mongodb project"
                      className="h-12"
                    />
                    <img
                      src="/nextjs.png"
                      alt=" mongodb project"
                      className="h-12"
                    />
                    <img
                      src="/nextjs.png"
                      alt=" mongodb project"
                      className="h-12"
                    />
                    <img
                      src="/docker.png"
                      alt=" mongodb project"
                      className="h-12"
                    />
                    <img
                      src="/expressjs.png"
                      alt=" mongodb project"
                      className="h-12"
                    />
                    <img
                      src="/nodejs.png"
                      alt=" mongodb project"
                      className="h-12"
                    />
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
