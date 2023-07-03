"use client";

import Image from "next/image";
import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import countdown1 from "../(ui)/images/slides/countdown1.webp";
import islamiat3 from "../(ui)/images/slides/islamiat 3.webp";
import motia from "../(ui)/images/slides/motia.webp";
import whiz1 from "../(ui)/images/slides/whiz1.webp";
import math1 from "../(ui)/images/slides/math1.webp";
import nard2 from "../(ui)/images/slides/nard2.webp";
import karwan1 from "../(ui)/images/slides/karwan1.webp";

export default class ImagesCaurosel extends Component {
  render() {
    let data = [
      {
        img: countdown1,
        title: "New Countdown Book 1 (3rd Edition)",
        link: "/products/new-countdown-book-1-3rd-edition",
      },
      {
        img: islamiat3,
        title: "islamiat book 3",
        link: "/products/islamiat-book-3",
      },
      {
        img: motia,
        title: "Urdu ka Guldasta: Motia",
        link: "/products/urdu-ka-guldasta-motia",
      },
      {
        img: whiz1,
        title: "Computer Whiz Book 1",
        link: "/products/computer-whiz-book-1",
      },
      {
        img: math1,
        title: "New Syllabus Primary Math Book 1",
        link: "/products/new-syllabus-primary-math-book-1",
      },
      {
        img: nard2,
        title: "Nardban-e-Urdu Workbook 2",
        link: "/products/nardban-e-urdu-workbook-2",
      },
      {
        img: karwan1,
        title: "KARWAN-E-URDU BOOK-1",
        link: "/products/karwan-e-urdu-book-1",
      },
    ];
    const settings = {
      dots: true,
      dotsClass: "slick-dots line-indicator",
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 424,
          settings: {
            slidesToShow: 2,
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
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className=" text-red-700 pb-2 text-3xl font-semibold tracking-wider border-b-4  first:mt-0 text-center mt-4">
          PRODUCTS
        </h2>

        <div className="mt-20 w-full ">
          <Slider {...settings} className="w-full">
            {data.map((val, index) => {
              return (
                <div
                  className="px-3 xl-lg:px-1 group mb-2 md:mb-5  relative overflow-hidden cursor-pointer outline-none "
                  key={val.title}
                >
                  <div className="relative bg-slate-900 rounded-lg   overflow-hidden">
                    <Link href={val.link}>
                      <Image
                        src={val.img}
                        className=" w-full  h-[175px] md:h-[305px] lg:h-[290px] object-bottom hover:scale-105 delay-105 duration-700 ease-linear"
                        alt={val.title}
                      />
                    </Link>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}
