import { css, Global } from "@emotion/react";
import React from "react";
import { Window } from "./Window";

const container = css`
  /* background: #000; */
  display: grid;
  height: 100vh;
  place-items: center;
  width: 100vw;
`;

const App: React.FC = () => (
  <>
    <Global
      styles={css`
        body {
          -webkit-app-region: drag;
          margin: 0;
          overflow: hidden;
          padding: 0;
        }
      `}
    />
    <div css={container}>
      <Window />
    </div>
  </>
);

export default <App />;
