import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SwiperCore from "swiper";
import museum1 from '../../assets/museum1.jpg';
import museum2 from '../../assets/museum2.jpg';
import museum3 from '../../assets/museum3.jpg';
import museum4 from '../../assets/museum4.jpg';
import museum5 from '../../assets/museum5.jpg';
import museum6 from '../../assets/museum6.jpg';
import museum7 from '../../assets/museum7.jpg';
import museum8 from '../../assets/museum8.jpg';
import museum9 from '../../assets/museum9.jpg';
import "swiper/swiper-bundle.css";
import './styles.sass';

SwiperCore.use([Navigation, Thumbs]);

const MuseumSliderImage = [
    museum1,
    museum2,
    museum3,
    museum4,
    museum5,
    museum6,
    museum7,
    museum8,
    museum9
]


const MuseumSlider: React.FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState<SwiperCore | null>(null);
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <div className="museum-slider-page">
      <div className="museum-slider-title">
        <h3 className="title">Музей</h3>
      </div>

      <div className="museum-slider-swiper">
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
          className="museum-slider-swiper-container"
          style={{ height: "500px" }}
        >
          {MuseumSliderImage.map((src, i) => (
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
          {MuseumSliderImage.map((src, i) => (
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

export default MuseumSlider;