import { CSSProperties, SVGAttributes, createContext } from 'react';

export interface IconContextProps {
  color?: string;
  size?: string;
  className?: string;
  style?: CSSProperties;
  attr?: SVGAttributes<SVGElement>;
}

export const DefaultContext: IconContextProps = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined,
};

export const IconContext: React.Context<IconContextProps> = createContext(
  DefaultContext
);
