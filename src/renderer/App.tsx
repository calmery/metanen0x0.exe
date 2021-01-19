import { css, Global } from "@emotion/react";
import React from "react";

const container = css`
  color: red;
`;

const App: React.FC = () => (
  <>
    <Global
      styles={css`
        body {
          align-items: center;
          display: flex;
          height: 100vh;
          justify-content: center;
          overflow: hidden;
          width: 100vw;
        }
      `}
    />
    <div css={container}>Hello World</div>
  </>
);

export default <App />
