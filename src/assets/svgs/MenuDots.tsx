import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const MenuDots = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={4}
    fill="none"
    {...props}>
    <Path
      fill="#303030"
      fillRule="evenodd"
      d="M2 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm5 2a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm7 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default MenuDots;
