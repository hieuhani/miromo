import { SpaceProps, StyleProps } from '../types';

const spacingProps: Array<keyof SpaceProps> = [
  'm',
  'mt',
  'mr',
  'mb',
  'ml',
  'mx',
  'my',
  'p',
  'pt',
  'pr',
  'pb',
  'pl',
  'px',
  'py',
];

const sizes = ['sm', 'md', 'lg', 'xl', '2xl'];

export const getStyleClassname = (props: StyleProps): string => {
  const classNames: Array<string> = [];
  spacingProps.forEach((prop) => {
    if (props[prop]) {
      if (typeof props[prop] === 'number') {
        const sign = props[prop] < 0 ? '-' : '';
        const value = Math.abs(props[prop]);
        classNames.push(`${sign}${prop}-${value}`);
      } else if (Array.isArray(props[prop])) {
        props[prop].forEach((valueItem, index) => {
          if (sizes[index]) {
            const sign = valueItem < 0 ? '-' : '';
            const value = Math.abs(valueItem);
            classNames.push(`${sign}${prop}-${value}`);
          }
        });
      }
    }
  });
  return classNames.join(' ');
};
