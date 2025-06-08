import type { EmblaOptionsType } from "embla-carousel";
import { ReactNode, useCallback } from "react";
import styles from "./Carousel.module.scss";
import useEmblaCarousel from "embla-carousel-react";

interface CarouselProps {
  children: ReactNode;
  options?: EmblaOptionsType;
  withControls?: boolean;
  className?: string;
}

export const Carousel = ({
  children,
  options,
  withControls = true,
  className = "",
}: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({...options, loop:true});

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={`${styles.embla} ${className}`}>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>{children}</div>
      </div>

      {withControls && (
        <>
          <button
            className={`${styles.control} ${styles.prev}`}
            onClick={scrollPrev}
            aria-label="Previous slide"
          >
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
              />
            </svg>
          </button>
          <button
            className={`${styles.control} ${styles.next}`}
            onClick={scrollNext}
            aria-label="Next slide"
          >
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
              />
            </svg>
          </button>
        </>
      )}
    </div>
  );
};
