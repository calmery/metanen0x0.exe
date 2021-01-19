import { css, Global } from "@emotion/react";
import React from "react";
import { EvilMedicine } from "./EvilMedicine";

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
    <EvilMedicine />
  </>
);

export default <App />;
