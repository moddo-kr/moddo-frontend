import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import theme from '@/styles/theme';

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
    src: url('/fonts/PretendardVariable.woff2');
    font-weight: 100 900;
    font-style: normal;
    font-display: swap;
  }

  html, body {
    font-family: 'Pretendard', sans-serif;
    font-size: 16px; // 1rem = 16px
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

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  /* 모든 브라우저에서 number type input 버튼 제거 */
  /* Chrome, Safari, Edge, Opera */
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  input[type='number'] {
    appearance: textfield;
  }

  /* Swiper css */
  .swiper {
    display: flex;
    max-width: 37.5rem;
    flex-direction: column;
    flex: 1;
    width: 100%;
  }

  .swiper-slide {
    display: flex;
  }

  .swiper-button-next, .swiper-button-prev {
    margin: 0 10px;
  }

  .swiper-pagination-bullet-active {
    width: ${theme.unit[16]};
    border-radius: ${theme.radius.default};
  }

  :root {
    --swiper-navigation-size: ${theme.unit[40]};
    --swiper-theme-color: ${theme.color.semantic.orange.default};
  }

`;

export default GlobalStyles;
