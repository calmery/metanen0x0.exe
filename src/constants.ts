export const ELECTRON_IPC_CHANNEL_CLOSE = "close";

export const WINDOW_HEIGHT = 600;
export const WINDOW_SHADOW_BLUR = 8;
export const WINDOW_WIDTH = 800;

export const DIAGONAL_LENGTH = Math.ceil(
  Math.sqrt(
    Math.pow(WINDOW_WIDTH + WINDOW_SHADOW_BLUR, 2) +
      Math.pow(WINDOW_HEIGHT + WINDOW_SHADOW_BLUR, 2)
  )
);
