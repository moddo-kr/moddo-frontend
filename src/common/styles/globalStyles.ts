import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize}

  *{
    box-sizing: border-box;
    scrollbar-width: none; /* Firefox에서 스크롤바 숨기기 */
    -ms-overflow-style: none; /* Internet Explorer에서 스크롤바 숨기기 */

    ::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Edge에서 스크롤바 숨기기 */
    }
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/assets/fonts/PretendardVariable.woff2');
    font-weight: 100 900;
    font-style: normal;
    font-display: swap;
  }

  html, body {
    font-family: 'Pretendard', sans-serif;
    color: black;
    
    height: 100%;
    width: 100%;
    background: #f9f9f9;
    overflow: hidden;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
