import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const Clock = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}>
    <Path
      fill="#33CDD7"
      d="M8 .5c4.148 0 7.5 3.36 7.5 7.5 0 4.148-3.352 7.5-7.5 7.5C3.86 15.5.5 12.148.5 8 .5 3.86 3.86.5 8 .5Zm-.263 3.697a.562.562 0 0 0-.562.563v3.787c0 .195.105.375.277.48l2.94 1.756a.556.556 0 0 0 .772-.195.565.565 0 0 0-.194-.773L8.3 8.225V4.76a.562.562 0 0 0-.563-.563Z"
    />
  </Svg>
);

export default Clock;
