import type { Pixel } from "./types";

const PixelComponent = ({ pixel }: { pixel: Pixel }) => (
  <div
    style={{
      backgroundColor: pixel.isSet
        ? `rgb(${pixel.red}, ${pixel.green}, ${pixel.blue})`
        : "white",
    }}
  />
);

export default PixelComponent;
