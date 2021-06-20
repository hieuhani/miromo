import { ImgHTMLAttributes } from 'react';

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  alt?: string;
}

export const Image: React.FunctionComponent<ImageProps> = ({
  alt = '',
  ...props
}) => <img alt={alt} {...props} />;
