import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const Delete = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}>
    <Path
      fill="#181818"
      fillRule="evenodd"
      d="M2.05 11.037c0-3.61.611-5.778 1.91-7.077 1.3-1.299 3.467-1.91 7.077-1.91s5.777.611 7.076 1.91c1.3 1.3 1.91 3.467 1.91 7.077s-.61 5.777-1.91 7.076c-1.299 1.3-3.467 1.91-7.076 1.91-3.61 0-5.778-.61-7.077-1.91-1.299-1.299-1.91-3.467-1.91-7.076ZM11.037.55C7.344.55 4.643 1.156 2.9 2.9 1.156 4.643.55 7.344.55 11.037c0 3.692.606 6.393 2.35 8.137 1.743 1.744 4.444 2.35 8.137 2.35 3.692 0 6.393-.607 8.137-2.35 1.744-1.744 2.35-4.445 2.35-8.137 0-3.693-.607-6.394-2.35-8.137C17.43 1.156 14.729.55 11.037.55Zm-3.578 9.737a.75.75 0 0 0 0 1.5h7.155a.75.75 0 1 0 0-1.5H7.46Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default Delete;
