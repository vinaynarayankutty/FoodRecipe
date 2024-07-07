import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const RightArrow = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={12}
    fill="none"
    {...props}>
    <Path
      fill="#00C1CD"
      fillRule="evenodd"
      d="M7.742.357a.676.676 0 0 0 .002.913l3.85 4.084H.938l-.082.006C.56 5.403.333 5.673.333 6c0 .357.271.646.606.646h10.653L7.744 10.73l-.06.072a.678.678 0 0 0 .058.841.58.58 0 0 0 .857.002l4.875-5.173a.663.663 0 0 0 .192-.448.668.668 0 0 0-.178-.482L8.598.355 8.532.292a.579.579 0 0 0-.79.065Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default RightArrow;
