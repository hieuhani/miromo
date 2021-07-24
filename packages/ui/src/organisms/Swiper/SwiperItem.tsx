import { CSSProperties, HTMLProps } from 'react';
import cx from 'classnames';

export interface SwiperItemProps extends HTMLProps<HTMLAnchorElement> {
  widthByPercent?: number;
}

export const SwiperItem: React.FunctionComponent<SwiperItemProps> = ({
  children,
  className,
  widthByPercent = 100,
}) => {
  const widthPercent = widthByPercent / 100;
  const width = `calc(var(--swiper-width) * ${widthPercent})`;
  const style = {
    flex: `0 0 ${width}`,
    width,
    scrollSnapAlign: 'start',
  } as CSSProperties;
  return (
    <div style={style} className={cx('rounded-xl overflow-hidden', className)}>
      {children}
    </div>
  );
};
