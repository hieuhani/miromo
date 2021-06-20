import { CSSProperties } from 'react';

export const SwiperItem: React.FunctionComponent = ({ children }) => {
  const style = {
    flex: '0 0 var(--swiper-width)',
    width: 'var(--swiper-width)',
    scrollSnapAlign: 'start',
  } as CSSProperties;
  return (
    <div style={style} className="justify-center items-center flex bg-gray-100">
      {children}
    </div>
  );
};
