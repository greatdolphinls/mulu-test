
import css from 'styled-jsx/css';

export default css.global`
  html,
  body {
    min-height: 100vh;
  }
  ::-webkit-scrollbar {
    width: 4px
  }  
  ::-webkit-scrollbar-thumb {
    background-color: #5c739c !important;
    border: none !important;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: rgb(255, 255, 255, .6) !important
  }
  body::-webkit-scrollbar {
    width: 8px;
  }
`;
