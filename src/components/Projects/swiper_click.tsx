import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useSwiper } from "swiper/react";

export const SwiperButtons = () => {
  const swiper = useSwiper();

  return (
    <>
      <button onClick={() => swiper.slidePrev()}>
        <FaChevronLeft />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <FaChevronRight />
      </button>
    </>
  );
};
