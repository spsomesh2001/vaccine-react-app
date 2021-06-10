import { createGlobalStyle } from "styled-components";

export const GlobalContainer = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    /* min-height: 100vh; */

    /* CSS HEX */
  --oxford-blue: #0a1128ff;
  --royal-blue-dark: #001f54ff;
  --indigo-dye: #034078ff;
  --cg-blue: #1282a2ff;
  --white: #fefcfbff;
  }
`;
