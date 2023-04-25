import React,{useEffect} from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import heroImg from "@/img/home/hero-img.jpg";
import featured from "@/img/home/featured .jpg";
import featured2 from "@/img/home/featured2 .png";
import featured3 from "@/img/home/featured3 .jpg";
import featured4 from "@/img/home/featured4 .jpg";
import heroImg2 from "@/img/home/home-banner-image.jpg";

import gallery from "@/img/home/featured1.png"
import gallery1 from "@/img/home/featured2.png"
import gallery2 from "@/img/home/featured3.png"

import {
  EffectFade,
  Pagination,
  Autoplay,
  Scrollbar,
  EffectCoverflow,
  Navigation,
} from "swiper";

import Image from "next/image";

export function HeroSwiper() {
  return (
    <Swiper
      spaceBetween={30}
      modules={[EffectFade, Pagination, Autoplay, Scrollbar]}
      effect={"fade"}
      pagination={{
        clickable: true,
      }}
      rewind={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      scrollbar={{ draggable: true }}
      className="mySwiper"
    >
      <SwiperSlide>
        <Image
          src={heroImg}
          alt="alt"
          className="img-fluid"
          width={"100%"}
          height={"100%"}
          loading="lazy"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={heroImg2}
          alt="alt"
          className="img-fluid"
          width={"100%"}
          height={"100%"}
          loading="lazy"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={heroImg}
          alt="alt"
          className="img-fluid"
          width={"100%"}
          height={"100%"}
          loading="lazy"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={heroImg2}
          alt="alt"
          className="img-fluid"
          width={"100%"}
          height={"100%"}
          loading="lazy"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={heroImg}
          alt="alt"
          className="img-fluid"
          width={"100%"}
          height={"100%"}
          loading="lazy"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export function FeaturedSwiper() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={40}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[EffectCoverflow, Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={featured} width="100%" alt="alt" />
          <p>Warm Sweaters</p>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={featured2} width="100%" alt="alt" />
          <p>Cool brand of shoes</p>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={featured3} width="100%" alt="alt" />
          <p>Sweatshirt for winter</p>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={featured4} width="100%" alt="alt" />
          <p>Macho and warm jeans</p>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={featured} width="100%" alt="alt" />
          <p>Warm Sweaters</p>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={featured2} width="100%" alt="alt" />
          <p>Cool brand of shoes</p>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={featured3} width="100%" alt="alt" />
          <p>Sweatshirt for winter</p>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={featured4} width="100%" alt="alt" />
          <p>Macho and warm jeans</p>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={featured} width="100%" alt="alt" />
          <p>Warm Sweaters</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export function GallerySwiper() {

  return (
    <Swiper
      spaceBetween={30}
      modules={[EffectFade, Pagination, Scrollbar, Navigation ,Autoplay]}
      effect={"fade"}
      pagination={{
        clickable: true,
      }}
      slidesPerView={"3"}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      scrollbar={{ draggable: true }}
      className="mySwiper"
      navigation={true}
    >
      <SwiperSlide>
        <div className="gallery-swiper">
          <Image
            src={gallery}
            alt="alt"
            className="img-fluid"
            width={"100%"}
            height={"100%"}
            loading="lazy"
          />
        </div>
        <div className="gallery-swiper">
          <Image
            src={gallery1}
            alt="alt"
            className="img-fluid"
            width={"100%"}
            height={"100%"}
            loading="lazy"
          />
        </div>

        <div className="gallery-swiper">
          <Image
            src={gallery2}
            alt="alt"
            className="img-fluid"
            width={"100%"}
            height={"100%"}
            loading="lazy"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="gallery-swiper">
          <Image
            src={gallery2}
            alt="alt"
            className="img-fluid"
            width={"100%"}
            height={"100%"}
            loading="lazy"
          />
        </div>
        <div className="gallery-swiper">
          <Image
            src={gallery1}
            alt="alt"
            className="img-fluid"
            width={"100%"}
            height={"100%"}
            loading="lazy"
          />
        </div>
        <div className="gallery-swiper">
          <Image
            src={gallery}
            alt="alt"
            className="img-fluid"
            width={"100%"}
            height={"100%"}
            loading="lazy"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="gallery-swiper">
          <Image
            src={gallery2}
            alt="alt"
            className="img-fluid"
            width={"100%"}
            height={"100%"}
            loading="lazy"
          />
        </div>
        <div className="gallery-swiper">
          <Image
            src={gallery1}
            alt="alt"
            className="img-fluid"
            width={"100%"}
            height={"100%"}
            loading="lazy"
          />
        </div>
        <div className="gallery-swiper">
          <Image
            src={gallery}
            alt="alt"
            className="img-fluid"
            width={"100%"}
            height={"100%"}
            loading="lazy"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="gallery-swiper">
          <Image
            src={gallery}
            alt="alt"
            className="img-fluid"
            width={"100%"}
            height={"100%"}
            loading="lazy"
          />
        </div>
        <div className="gallery-swiper">
          <Image
            src={gallery1}
            alt="alt"
            className="img-fluid"
            width={"100%"}
            height={"100%"}
            loading="lazy"
          />
        </div>
        <div className="gallery-swiper">
        <Image
          src={gallery}
          alt="alt"
          className="img-fluid"
          width={"100%"}
          height={"100%"}
          loading="lazy"
        />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="gallery-swiper">
          <Image
            src={gallery1}
            alt="alt"
            className="img-fluid"
            width={"100%"}
            height={"100%"}
            loading="lazy"
          />
        </div>
        <div className="gallery-swiper">
          <Image
            src={gallery}
            alt="alt"
            className="img-fluid"
            width={"100%"}
            height={"100%"}
            loading="lazy"
          />
        </div>
        <div className="gallery-swiper">
          <Image
            src={gallery2}
            alt="alt"
            className="img-fluid"
            width={"100%"}
            height={"100%"}
            loading="lazy"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
