import { HTMLProps } from 'react';

export interface ImageProps extends HTMLProps<HTMLImageElement> {
  alt?: string;
}

export const Image: React.FunctionComponent<ImageProps> = ({
  alt = '',
  ...props
}) => <img alt={alt} {...props} />;
