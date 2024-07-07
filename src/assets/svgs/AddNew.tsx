import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const AddNew = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}>
    <Path
      fill="#303030"
      fillRule="evenodd"
      d="M9.386 1.388a1.387 1.387 0 1 0-2.772 0v5.224H1.386a1.387 1.387 0 0 0 0 2.776h5.228v5.225a1.387 1.387 0 1 0 2.772 0V9.388h5.228a1.387 1.387 0 0 0 0-2.776H9.386V1.388Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default AddNew;
