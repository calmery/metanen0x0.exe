import { css, keyframes } from "@emotion/react";
import React, { useCallback } from "react";
import { DIAGONAL_LENGTH, ELECTRON_IPC_CHANNEL_CLOSE } from "../constants";
import { Window } from "./Window";
import { ipcRenderer } from "electron";

// Animations

const hue = keyframes`
 0% {
   filter: hue-rotate(0);
 }

 50% {
   filter: hue-rotate(180deg);
 }

 100% {
   filter: hue-rotate(360deg);
 }
`;

const rotate = keyframes`
  0% {
    transform: rotate(0);
  }

  50% {
    transform: rotate(180deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const scale = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.4);
  }

  100% {
    transform: scale(1);
  }
`;

// Styles

const container = css`
  animation: ${rotate} linear 3.6s infinite;
  display: grid;
  height: 100vh;
  place-items: center;
  width: 100vw;
`;

const icon = css`
  animation: ${scale} linear 0.4s infinite;
  border-radius: 100%;
  height: 256px;
  width: 256px;

  &:hover {
    animation: ${scale} linear 0.4s infinite, ${hue} linear 0.8s infinite;
  }
`;

const rainbow = css`
  animation: ${rotate} linear 1.6s infinite;
  background: conic-gradient(
    from 90deg,
    violet,
    indigo,
    blue,
    green,
    yellow,
    orange,
    red,
    violet
  );
  display: grid;
  height: ${DIAGONAL_LENGTH}px;
  left: 50%;
  margin: -${DIAGONAL_LENGTH / 2}px 0 0 -${DIAGONAL_LENGTH / 2}px;
  place-items: center;
  position: absolute;
  top: 50%;
  user-select: none;
  width: ${DIAGONAL_LENGTH}px;
`;

// Components

export const EvilMedicine: React.FC = () => {
  const handleClickCloseButton = useCallback(() => {
    ipcRenderer.send(ELECTRON_IPC_CHANNEL_CLOSE);
  }, [])

  return(
  <div css={container}>
    <Window headerIcon="icon.ico" headerTitle="繧√◆縺ｭ縺ｮ縺翫￥縺吶ｊ" onClickCloseButton={handleClickCloseButton}>
      <div css={rainbow}>
        <img css={icon} src="metaneno.jpg" />
      </div>
    </Window>
  </div>
)}
