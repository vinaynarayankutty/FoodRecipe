import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const Serves = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={16}
    fill="none"
    {...props}>
    <Path
      fill="#33CDD7"
      fillRule="evenodd"
      d="M10.844 4.469c0 2.203-1.803 3.968-4.053 3.968-2.248 0-4.052-1.765-4.052-3.968C2.739 2.266 4.543.5 6.79.5c2.25 0 4.053 1.766 4.053 3.969ZM.667 12.93c0-2.04 2.821-2.55 6.124-2.55 3.322 0 6.125.528 6.125 2.57 0 2.039-2.821 2.549-6.125 2.549-3.32 0-6.124-.528-6.124-2.569Zm11.811-8.39a5.306 5.306 0 0 1-.947 3.038c-.063.09-.008.21.102.23.151.024.307.04.466.042 1.582.041 3.002-.956 3.394-2.458.581-2.229-1.125-4.23-3.298-4.23-.235 0-.461.024-.681.068-.03.006-.063.02-.08.046-.02.033-.005.075.016.103a5.345 5.345 0 0 1 1.028 3.16Zm2.62 4.878c1.063.203 1.762.618 2.052 1.222.245.495.245 1.07 0 1.565-.443.936-1.872 1.237-2.427 1.315a.172.172 0 0 1-.195-.194c.284-2.593-1.972-3.823-2.556-4.106-.025-.013-.03-.032-.028-.045.002-.008.012-.02.031-.023 1.263-.024 2.622.146 3.123.266Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default Serves;
