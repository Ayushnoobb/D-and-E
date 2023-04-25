import React from "react";
import {
  HeroSwiper,
  FeaturedSwiper,
  GallerySwiper,
} from "@/component/swiper/Swiper";
import Link from "next/link";
import { Heading, SubHeading } from "@/component/heading/Heading";
import aboutImg from "@/img/home/about .png";
import { Noto_Sans } from "next/font/google";
import { Permanent_Marker } from "next/font/google";



//trending img
import trending from "@/img/trending/trending.jpg";
import trending2 from "@/img/trending/trending2.jpg";
import trending3 from "@/img/trending/trnding3.jpg";

// popular img
import popular from "@/img/popular/popular.jpg";
import popular2 from "@/img/popular/popular2.jpg";
import popular3 from "@/img/popular/popular3.jpg";

// news img
import news from "@/img/news/news.jpg";
import news2 from "@/img/news/news2.jpg";
import news3 from "@/img/news/news3.jpg";
import news4 from "@/img/news/news4.jpg";

import recruitBg from "@/img/home/recruit-bg.jpg";
import Image from "next/image";


const marker = Permanent_Marker({ subsets: ["latin"] , weight:["400"] });
export default function Home() {

  return (
    <>
        <section className="hero">
          <div className="swiper__wrapper">
            <HeroSwiper />
            <div className="container">
              <div className="hero__des">
                <p className={marker.className}>
                  RELAX AND LET US BRING <br />
                  STYLE TO YOU
                </p>
                <Link className="button"  href="/gallery" ><span>View Gallery</span></Link>
              </div>
            </div>
          </div>
        </section>
        <section className="about">
          <div className="section-wrapper bg-yellow-gradient">
            <div className="container">
              <div className="about__content">
                <Heading title="About D&E" />
                <div className="flex flex-row justify-between ">
                  <div
                    className="about__img "
                    data-aos="fade-up-right"
                    data-aos-duration="1500"
                  >
                    <Image
                      src={aboutImg}
                      alt="man pointing toward right"
                      width={"100%"}
                      height={"100%"}
                      className="img-fluid"
                    />
                  </div>
                  <div className="about__desc" data-aos="fade-up-left">
                    <SubHeading title="Fashion As Unique As You Are" />
                    <p className="about__para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Recusandae quas omnis consectetur expedita nobis, dolores
                      esse, nam quae molestiae exercitationem facilis?
                    </p>
                    <Link className="button"  href="/about" ><span>View more</span></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="featured">
          <div className="section-wrapper">
            <div className="container">
              <div className="featured__content" data-aos="fade-up">
                <Heading title="Featured Items" />
                <FeaturedSwiper />
              </div>
            </div>
          </div>
        </section>
        <section className="trendings">
          <div className="section-wrapper bg-yellow-gradient">
            <div className="container">
              <div className="trendings-wrapper grid grid-cols-3">
                <article className="trending card">
                  <Heading title="New Products" />
                  <Image
                    src={trending3}
                    alt="trending product"
                    width={"100%"}
                    height={"100%"}
                    className="img-fluid"
                    data-aos="zoom-in"
                  />
                  <h4 className="heading">Leather Jacket</h4>
                  <p>
                    Dummy TextDummy TextDummy TextDummy Text
                    <br />
                    Dummy TextDummy TextDummy TextDummy Text
                    <br />
                    Dummy TextDummy TextDummy TextDummy Text
                  </p>
                  <Link className="button" href={"#"}><span>View More</span></Link>
                </article>
                <article className="trending card">
                  <Heading title="This week's Sale" />
                  <Image
                    src={trending2}
                    alt="trending product"
                    width={"100%"}
                    height={"100%"}
                    className="img-fluid"
                    data-aos="zoom-in"
                  />
                  <h4 className="heading">Modern Hat</h4>
                  <p>
                    Dummy TextDummy TextDummy TextDummy Text
                    <br />
                    Dummy TextDummy TextDummy TextDummy Text
                    <br />
                    Dummy TextDummy TextDummy TextDummy Text
                  </p>
                  <Link className="button" href={"#"}><span>View More</span></Link>
                </article>
                <article className="trending card">
                  <Heading title="For a limited time" />
                  <Image
                    src={trending}
                    alt="trending product"
                    width={"100%"}
                    height={"100%"}
                    className="img-fluid"
                    data-aos="zoom-in"
                  />
                  <h4 className="heading">Sun Glass</h4>
                  <p>
                    Dummy TextDummy TextDummy TextDummy Text
                    <br />
                    Dummy TextDummy TextDummy TextDummy Text
                    <br />
                    Dummy TextDummy TextDummy TextDummy Text
                  </p>
                  <Link className="button" href={"#"}><span>View More</span></Link>
                </article>
              </div>
            </div>
          </div>
        </section>
        <section className="populars">
          <div className="section-wrapper">
            <div className="container">
              <Heading title="Popular Products" />
              <div className="popular__wrapper  grid grid-cols-3">
                <article className="popular card">
                  <Image
                    src={popular}
                    alt="popular product"
                    width={"100%"}
                    height={"100%"}
                    className="img-fluid"
                    data-aos="flip-down"
                  />
                  <h4 className="heading">Babys Long Coat</h4>
                  <p>
                    Dummy TextDummy TextDummy TextDummy Text
                    <br />
                    Dummy TextDummy TextDummy TextDummy Text
                    <br />
                    Dummy TextDummy TextDummy TextDummy Text
                  </p>
                </article>
                <article className="popular card">
                  <Image
                    src={popular2}
                    alt="popular product"
                    width={"100%"}
                    height={"100%"}
                    className="img-fluid"
                    data-aos="flip-down"
                  />
                  <h4 className="heading">Babys Long Coat</h4>
                  <p>
                    Dummy TextDummy TextDummy TextDummy Text
                    <br />
                    Dummy TextDummy TextDummy TextDummy Text
                    <br />
                    Dummy TextDummy TextDummy TextDummy Text
                  </p>
                </article>
                <article className="popular card">
                  <Image
                    src={popular3}
                    alt="popular product"
                    width={"100%"}
                    height={"100%"}
                    className="img-fluid"
                    data-aos="flip-down"
                  />
                  <h4 className="heading">Babys Long Coat</h4>
                  <p>
                    Dummy TextDummy TextDummy TextDummy Text
                    <br />
                    Dummy TextDummy TextDummy TextDummy Text
                    <br />
                    Dummy TextDummy TextDummy TextDummy Text
                  </p>
                </article>
              </div>
              <Link className="button" href={"#"} >View More</Link>
            </div>
          </div>
        </section>
        <section className="news-list">
          <div className="section-wrapper bg-yellow-gradient">
            <div className="container">
              <Heading title="NEWS" />
              <div className="news__wrapper grid grid-cols-4">
                <article className="news">
                  <Image
                    src={news}
                    alt="news product"
                    width={"100%"}
                    height={"100%"}
                    className="img-fluid"
                    data-aos="fade-up-right"
                  />
                  <h5 className="heading">Brand Accessories on Sale</h5>
                  <p className="date">2020-09-04</p>
                </article>
                <article className="news">
                  <Image
                    src={news2}
                    alt="news product"
                    width={"100%"}
                    height={"100%"}
                    className="img-fluid"
                    data-aos="fade-up"
                  />
                  <h5 className="heading">Brand Jeans on Sale</h5>
                  <p className="date">2020-09-04</p>
                </article>
                <article className="news">
                  <Image
                    src={news3}
                    alt="news product"
                    width={"100%"}
                    height={"100%"}
                    className="img-fluid"
                    data-aos="fade-up"
                  />
                  <h5 className="heading">Brand Bags on Sale</h5>
                  <p className="date">2020-09-04</p>
                </article>
                <article className="news">
                  <Image
                    src={news4}
                    alt="news product"
                    width={"100%"}
                    height={"100%"}
                    className="img-fluid"
                    data-aos="fade-up-left"
                  />
                  <h5 className="heading">Brand Mens Accessories on Sale</h5>
                  <p className="date">2020-09-04</p>
                </article>
              </div>
              <Link className="button" href={"#"} ><span>View More</span></Link>
            </div>
          </div>
        </section>
        <section className="weekly">
          <div className="section-wrapper">
            <div className="container">
              <Heading title="This Week's Pickup" />
              <div className="weekly__wrapper grid grid-cols-3">
                <article className="week card">
                  <Image
                    src={news}
                    alt="week product"
                    width={"100%"}
                    height={"100%"}
                    className="img-fluid"
                    data-aos-delay="200"
                    data-aos="flip-right"
                    data-aos-offset="200"
                  />
                  <div className="weekly__content">
                    <p className="date">2020-09-04</p>
                    <h5 className="heading">Dummy Content available</h5>
                  </div>
                </article>
                <article className="week card">
                  <Image
                    src={news2}
                    alt="week product"
                    width={"100%"}
                    height={"100%"}
                    className="img-fluid"
                    data-aos="flip-right"
                    data-aos-delay="200"
                    data-aos-offset="200"
                  />
                  <div className="weekly__content">
                    <p className="date">2020-09-04</p>
                    <h5 className="heading">Dummy Content available</h5>
                  </div>
                </article>
                <article className="week card">
                  <Image
                    src={news3}
                    alt="week product"
                    width={"100%"}
                    height={"100%"}
                    className="img-fluid"
                    data-aos="flip-right"
                    data-aos-delay="200"
                    data-aos-offset="200"
                  />
                  <div className="weekly__content">
                    <p className="date">2020-09-04</p>
                    <h5 className="heading">Dummy Content available</h5>
                  </div>
                </article>
              </div>
              <Link className="button" href={"#"}><span>View More</span></Link>
            </div>
          </div>
        </section>
        <section className="recruit">
          <div className="section-wrapper">
            <div className="container">
              <div className="recruit-wrapper ">
                <Image
                  src={recruitBg}
                  alt="recruit-bg"
                  width={"100%"}
                  height={"100%"}
                  className="img-fluid"
                />
                <div className="recruit__content">
                  <h2 className="recruit-heading">We are Hiring Staff </h2>
                  <p>
                    Are you searching for a work and willing to work with us?
                    Lets work together as we are searching for an enthusiastic
                    and active people.
                  </p>
                  <Link className="button"  href={"#"} ><span>View More</span></Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="gallery">
          <div className="section-wrapper bg-yellow-gradient">
            <div className="container">
              <Heading title="GALLERY " />
              <GallerySwiper />
            </div>
          </div>
        </section>

    </>
  );
}
