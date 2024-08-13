import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import styles from './Carousel.module.css';
import { Button } from '../Button/Button';
import { useRef } from 'react';
import { Swiper as SwiperClass } from 'swiper/types';
import clsx from 'clsx';
import { Rank } from '../../types/Rank';

interface CarouselProps {
  ranks: Rank[];
  onSlideChange(rank: string): void;
}

export const Carousel = ({ ranks, onSlideChange }: CarouselProps) => {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <div style={{ width: '100%' }}>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className={styles.swiperWrapper}
        slidesPerView={4.9}
        spaceBetween={10}
        modules={[Navigation, EffectCoverflow]}
        centeredSlides
        effect="coverflow"
        coverflowEffect={{
          modifier: 1.1,
          rotate: 0,
          slideShadows: false,
          scale: 0.9,
          stretch: 10,
        }}
        onSlideChange={(swiper) =>
          onSlideChange(ranks[swiper.activeIndex].rankName)
        }
      >
        {ranks.map((rank) => (
          <SwiperSlide key={rank.rankName}>
            <img src={`/${rank.rankName}.png`} alt={rank.rankName} />
            <p className={styles.rankTitle}>{rank.rankName}</p>
          </SwiperSlide>
        ))}

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
