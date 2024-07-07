import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const BackArrow = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={14}
    fill="none"
    {...props}>
    <Path
      fill="#303030"
      fillRule="evenodd"
      d="M7.11.228a.811.811 0 0 1-.003 1.096l-4.62 4.901h12.786l.098.007c.355.052.629.376.629.768 0 .428-.326.775-.727.775H2.489l4.618 4.9.07.088a.813.813 0 0 1-.068 1.009.696.696 0 0 1-1.028.002L.23 7.567a.795.795 0 0 1-.23-.538.801.801 0 0 1 .213-.579L6.081.226 6.163.15a.695.695 0 0 1 .946.077Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default BackArrow;
