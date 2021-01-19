import { css } from "@emotion/react";
import React from "react";

// Styles

const body = css`
  flex-grow: 1;
`;

const button = css`
  display: grid;
  height: 100%;
  place-items: center;
  width: 46px;
`;

const buttons = css`
  display: flex;
  margin-left: auto;
`;

const closeButton = css`
  ${button};

  cursor: pointer;

  &:hover {
    background: #e81123;

    img {
      filter: brightness(100);
    }
  }
`;

const header = css`
  background: #fff;
  display: flex;
  height: 24px;
  user-select: none;
  width: 100%;
`;

const icon = css`
  height: 12px;
  height: 12px;
  margin: 0 4px;
`;

const title = css`
  align-items: center;
  display: flex;
  font-size: 8px;
  font-weight: bold;
  height: 100%;
`;

const window = css`
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.32);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.24);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-family: Roboto, sans-serif;
  height: 600px;
  width: 800px;
`;

// Components

export const Window: React.FC = ({ children }) => (
  <div css={window}>
    <div css={header}>
      <div css={title}>
        <img css={icon} src="icon.ico" />
        metanen0x0.exe
      </div>
      <div css={buttons}>
        <div css={button}>
          <img src="minimize.svg" />
        </div>
        <div css={button}>
          <img src="maximize.svg" />
        </div>
        <div css={closeButton}>
          <img src="close.svg" />
        </div>
      </div>
    </div>
    <div css={body}>{children}</div>
  </div>
);
