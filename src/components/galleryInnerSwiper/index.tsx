import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import SwiperCore from "swiper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/swiper-bundle.css";
import './styles.sass';
import { useParams } from "react-router-dom";
import { GalleryInnerData } from "../../data/galleryInnerData";

SwiperCore.use([Navigation, Thumbs]);


const ImageSlider: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const data = GalleryInnerData.find(item => item.id === id)
  
    if (!data) return <p>Информация не найдена</p>
  const [thumbsSwiper, setThumbsSwiper] = React.useState<SwiperCore | null>(null);

  // Refs for custom buttons
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <div className="gallery-inner-page">
      <div className="gallery-inner-title">
        <h3 className="title">{data.title}</h3>
      </div>

      <div className="gallery-inner-swiper">
        {/* Custom navigation buttons */}
        <div className="custom-nav-buttons">
            <div className="custom-nav-button">
                <div className="custom-prev" ref={prevRef}><FaArrowLeft />                </div>
            </div>
            <div className="custom-nav-button next">      
                <div className="custom-next" ref={nextRef}><FaArrowRight />
                </div>
            </div>
        </div>

        <Swiper
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          thumbs={{ swiper: thumbsSwiper }}
          className="gallery-inner-swiper-container"
          style={{ height: "500px" }}
        >
          {data.image.map((src, i) => (
            <SwiperSlide key={i}>
              <img
                src={src}
                alt={`Slide ${i}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={5}
          watchSlidesProgress
          className="thumb-slider"
          style={{ marginTop: "10px", height: "100px" }}
        >
          {data.image.map((src, i) => (
            <SwiperSlide key={i}>
              <img
                src={src}
                alt={`Thumb ${i}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageSlider;
