import hexToRgb from "./hexToRgb";

export function rgba(color, opacity) {
  return `rgba(${hexToRgb(color)}, ${opacity})`;
}

