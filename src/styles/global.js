import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   * {
      margin: 0px;
      padding: 0px;
      outline: 0px;
      box-sizing: border-box;
   }

   html, body, #root {
      min-height: 100%;
   }

   body {
      background: #F2f2f2;
      -webkit-font-smoothing: antialiased !important
   }
`;
