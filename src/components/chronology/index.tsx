import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import chronologyImage1 from "../../assets/chronologyImage1.jpg";
import chronologyImage2 from "../../assets/chronologyImage2.jpg";
import chronologyImage3 from "../../assets/chronologyImage3.jpg";
import chronologyImage4 from "../../assets/chronologyImage4.jpg";
import chronologyImage5 from "../../assets/chronologyImage5.jpg";
import "swiper/swiper-bundle.css";
import "./styles.sass";
import { Link } from "react-router-dom";

const Chronology = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const chronologyContent = [
    { id: 1, img: chronologyImage1, heading: "1943" },
    { id: 2, img: chronologyImage2, heading: "1962" },
    { id: 3, img: chronologyImage3, heading: "1963" },
    { id: 4, img: chronologyImage4, heading: "1971" },
    { id: 5, img: chronologyImage5, heading: "1996", description: null },
  ];

  return (
    <div className="chronology">
      <div className="container">
        <div className="chronology-content">
          <div className="chronology-content-title">
            <h3 className="title">Хронология жизни</h3>
          </div>
          <div className="chronology-btns">
            <button ref={prevRef} className="slider-btn arrow-left">
              <FiArrowLeft />
            </button>
            <button ref={nextRef} className="slider-btn arrow-right">
              <FiArrowRight />
            </button>
          </div>

          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 2000 }}
            navigation={{
              prevEl: prevRef.current!,
              nextEl: nextRef.current!,
            }}
            onBeforeInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            modules={[Autoplay, Navigation]}
            centeredSlides={true}
            speed={1200}
            className="chronology-swiper"
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
              850: {
                slidesPerView: 2.5,
                spaceBetween: 50,
              },
              990: {
                slidesPerView: 2.5,
                spaceBetween: 50,
              },
              1250: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            {chronologyContent.map((item) => (
              <SwiperSlide key={item.id}>
                <Link to='/biography'>
                  <div className="chronology-card">
                    <div className="chronology-card-content">
                      <div className="chronology-card-content-img">
                        <img src={item.img} className="img" alt="" />
                      </div>
                      <div className="chronology-card-content-text">
                        <div className="chronology-card-content-text-heading">
                          <h5 className="heading">{item.heading}</h5>
                        </div>
                        <div className="chronology-card-content-text-description">
                          <p className="description">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-pagination">
            {chronologyContent.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === activeIndex ? "active" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chronology;



