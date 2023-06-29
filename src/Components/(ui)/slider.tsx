"use client";

import Image from "next/image";
import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";

import Image1 from "../(ui)/images/slides/slide1.png";
import Image3 from "../(ui)/images/slides/slide2.jpg";
import Image2 from "../(ui)/images/slides/slide3.jpg";

export default class ImagesCaurosel extends Component {
  render() {
    let data = [
      {
        img: Image1,
        title: "ss books",
        text: " Unlock Knowledge, Empower Minds: Your One-Stop School Bookshop!.",
        link: "/products",
      },
      {
        img: Image2,
        title: "ss books",
        text: " Unlock Knowledge, Empower Minds: Your One-Stop School Bookshop!.",

        link: "/products",
      },
      {
        img: Image3,
        title: "ss books",
        text: " Unlock Knowledge, Empower Minds: Your One-Stop School Bookshop!.",

        link: "/products",
      },
    ];
    const settings = {
      dots: true,
      dotsClass: "slick-dots line-indicator",
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],

      customPaging: (i: number) => (
        <div className="-mt-2 text-xs opacity-0">{i}</div>
      ),
    };
    return (
      <div className="mt-20 w-full">
        <Slider {...settings} className="w-full">
          {data.map((val, index) => {
            return (
              <div
                className="px-3 xl-lg:px-1 group mb-2 md:mb-5  relative overflow-hidden cursor-pointer outline-none"
                key={index}
              >
                <div className="relative bg-slate-900 rounded-lg   overflow-hidden">
                  <Link href={val.link}>
                    <Image
                      src={val.img}
                      className="w-full h-[300px]  md:h-[900px]  object-fill"
                      alt={val.title}
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
