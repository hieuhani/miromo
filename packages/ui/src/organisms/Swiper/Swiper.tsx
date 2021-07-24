import { CSSProperties, HTMLProps } from 'react';
import cx from 'classnames';
import { useWindowSize } from '../../hooks';

export interface SwiperProps extends HTMLProps<HTMLDivElement> {}

export const Swiper: React.FunctionComponent<SwiperProps> = ({
  children,
  className,
}) => {
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
      className={cx(
        'slider flex box-border overflow-x-scroll min-h-36',
        className
      )}
    >
      {children}
    </div>
  );
};
