import { createGlobalStyle } from 'styled-components';

import HelveticaNeueLightWoff from './HelveticaNeueLight.woff';
import HelveticaNeueLightWoff2 from './HelveticaNeueLight.woff2';


export default createGlobalStyle`
  @font-face {
    font-family: 'Helvetica Neue Light';
    src: local('Helvetica Neue Light'), local('HelveticaNeueLight'), url(${HelveticaNeueLightWoff}) format('woff'), url(${HelveticaNeueLightWoff2}) format('woff2');
    font-style: normal;
  }`;
