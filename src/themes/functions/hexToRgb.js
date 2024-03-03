import chroma from "chroma-js";

export function hexToRgb(color) {
    return chroma(color).rgb().join(", ");
}
