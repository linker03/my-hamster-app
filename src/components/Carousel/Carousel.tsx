import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import styles from './Carousel.module.css';
import { Button } from '../Button/Button';
import { useRef } from 'react';
import { Swiper as SwiperClass } from 'swiper/types';
import clsx from 'clsx';

export const Carousel = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  console.log(swiperRef);

  return (
    <div style={{ width: '100%' }}>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className={styles.swiperWrapper}
        slidesPerView={4}
        spaceBetween={10}
        modules={[Navigation, EffectCoverflow]}
        centeredSlides
        effect="coverflow"
        coverflowEffect={{
          modifier: 1,
          rotate: 0,
          slideShadows: false,
          scale: 0.9,
          stretch: 10,
        }}
      >
        <SwiperSlide>
          <img src="/acolyte.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/deacon.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/priest.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/bishop.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/archbishop.png" alt="" />
        </SwiperSlide>
        <Button
          className={clsx(styles.navigationButton, styles.navigationButtonPrev)}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <img className={styles.arrowImage} src="/arrow-left.svg" alt="" />
        </Button>
        <Button
          className={clsx(styles.navigationButton, styles.navigationButtonNext)}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <img className={styles.arrowImage} src="/arrow-right.svg" alt="" />
        </Button>
      </Swiper>
    </div>
  );
};
