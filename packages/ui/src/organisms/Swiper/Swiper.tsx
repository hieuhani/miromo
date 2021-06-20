import { CSSProperties } from 'react';
import { SwiperItem } from './SwiperItem';
import { useWindowSize } from '../../hooks';

export const Swiper: React.FunctionComponent = () => {
  const size = useWindowSize();
  if (!size.width) {
    return null;
  }
  // TODO: Inject screen width to the root css
  const style = {
    '--screen-width': `${size.width}px`,
    '--swiper-width': 'calc(var(--screen-width) - 2rem)',
    width: 'var(--swiper-width)',
    scrollSnapType: 'x mandatory',
    WebkitOverflowScrolling: 'touch',
  } as CSSProperties;
  return (
    <div
      style={style}
      className="slider flex box-border overflow-x-scroll h-24"
    >
      <SwiperItem>Slide #1</SwiperItem>
      <SwiperItem>Slide #2</SwiperItem>
      <SwiperItem>Slide #3</SwiperItem>
      <SwiperItem>Slide #4</SwiperItem>
      <SwiperItem>Slide #5</SwiperItem>
    </div>
  );
};
