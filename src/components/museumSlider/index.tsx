import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SwiperCore from "swiper";
import m1 from '../../assets/museum1.jpg'
import m2 from '../../assets/museum2.jpg'
import m3 from '../../assets/museum3.jpg'
import m4 from '../../assets/museum4.jpg'
import m5 from '../../assets/museum5.jpg'
import m6 from '../../assets/museum6.jpg'
import m7 from '../../assets/museum7.jpg'
import m8 from '../../assets/museum8.jpg'
import m9 from '../../assets/museum9.jpg'
import m10 from '../../assets/museum10.jpg'
import m11 from '../../assets/museum14.jpg'
import m12 from '../../assets/museum15.jpg'
import m13 from '../../assets/museum17.jpg'
import m14 from '../../assets/museum24.jpg'
import mv1 from '../../assets/museum3.mov'
import mv2 from '../../assets/museum4.mov'
import mv3 from '../../assets/museum7.mov'
import mv4 from '../../assets/museum8.mov'
import mv5 from '../../assets/museum11.mov'
import mv6 from '../../assets/museum12.mov'
import mv7 from '../../assets/museum13.mov'
import mv8 from '../../assets/museum16.mov'
import mv9 from '../../assets/museum18.mov'
import mv10 from '../../assets/museum19.mov'
import mv11 from '../../assets/museum20.mov'
import mv12 from '../../assets/museum21.mov'
import mv13 from '../../assets/museum22.mov'
import mv14 from '../../assets/museum23.mov'
import "swiper/swiper-bundle.css";
import './styles.sass';

SwiperCore.use([Navigation, Thumbs]);

const MuseumSliderMedia = [
  { type: 'image', src: m1 },
  { type: 'video', src: mv1 },
  { type: 'image', src: m2 },
  { type: 'video', src: mv2 },
  { type: 'image', src: m3 },
  { type: 'video', src: mv3 },
  { type: 'image', src: m4 },
  { type: 'video', src: mv4 },
  { type: 'image', src: m5 },
  { type: 'video', src: mv11 },
  { type: 'image', src: m6 },
  { type: 'video', src: mv5 },
  { type: 'image', src: m7 },
  { type: 'video', src: mv13 },
  { type: 'video', src: mv14 },
  { type: 'image', src: m8 },
  { type: 'video', src: mv6 },
  { type: 'image', src: m9 },
  { type: 'video', src: mv12 },
  { type: 'image', src: m10 },
  { type: 'video', src: mv7 },
  { type: 'image', src: m11 },
  { type: 'image', src: m12 },
  { type: 'video', src: mv8 },
  { type: 'image', src: m13 },
  { type: 'video', src: mv9 },
  { type: 'image', src: m14 },
  { type: 'video', src: mv10 },
];



const MuseumSlider: React.FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState<SwiperCore | null>(null);
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  // const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
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
          {MuseumSliderMedia.map((media, i) => (
            <SwiperSlide key={i}>
              {media.type === 'image' ? (
                <img
                  src={media.src}
                  alt={`Slide ${i}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <video
                  src={media.src}
                  autoPlay
                  muted 
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              )}
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
          {MuseumSliderMedia.map((media, i) => (
            <SwiperSlide key={i}>
              {media.type === 'image' ? (
                <img
                  src={media.src}
                  alt={`Thumb ${i}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover", cursor: "pointer" }}
                />
              ) : (
                <video
                  src={media.src}
                  muted
                  autoPlay
                  style={{ width: "100%", height: "100%", objectFit: "cover", cursor: "pointer" }}
                />
              )}
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
    </div>
  );
};

export default MuseumSlider;