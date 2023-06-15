import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {memo} from 'react';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={31}
    height={31}
    fill="none"
    {...props}>
    <Path
      fill="#E0CFBA"
      d="M15.396.917c-8.272 0-15 6.728-15 15 0 8.271 6.728 15 15 15 8.271 0 15-6.729 15-15 0-8.272-6.729-15-15-15Zm0 2.5a12.48 12.48 0 0 1 12.5 12.5 12.48 12.48 0 0 1-12.5 12.5 12.48 12.48 0 0 1-12.5-12.5 12.48 12.48 0 0 1 12.5-12.5ZM8.52 9.666c-1.035 0-1.875.84-1.875 1.874 0 .118.01.23.039.352.054.298.176.552.351.781.938 1.617 3.36 3.242 3.36 3.242s3.75-2.382 3.75-4.375a1.875 1.875 0 0 0-3.75 0c0-1.035-.84-1.875-1.875-1.875Zm10 0c-1.035 0-1.875.84-1.875 1.874 0 .118.01.23.039.352.053.298.176.552.351.781.938 1.617 3.36 3.242 3.36 3.242s2.485-1.61 3.398-3.28c.2-.372.352-.733.352-1.095a1.875 1.875 0 0 0-3.75 0c0-1.035-.84-1.875-1.875-1.875Zm-9.61 10-2.148 1.25c1.728 2.983 4.941 5 8.633 5 3.691 0 6.904-2.017 8.633-5l-2.149-1.25c-1.299 2.24-3.701 3.75-6.484 3.75-2.784 0-5.186-1.51-6.485-3.75Z"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
