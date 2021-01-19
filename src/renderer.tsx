/// <reference types="@emotion/react/types/css-prop"/>

import { css, Global } from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom";

const container = css`
  color: red;
`;

// Components

const Index: React.FC = () => (
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

// Main

const div = document.createElement("div");
document.body.appendChild(div);

ReactDOM.render(<Index />, div);
