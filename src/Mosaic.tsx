import PixelComponent from "./PixelComponent";

import type { CSSProperties } from "react";
import type { Image } from "./types";

import "./Mosaic.css";

type Props = {
  image: Image;
};

const style = {
  "--width": 50,
  "--height": 50,
} as CSSProperties;

const Mosaic = ({ image }: Props) => {
  return (
    <div className="Mosaic" style={style}>
      {image.flat().map((pixel, index) => (
        <PixelComponent pixel={pixel} key={index} />
      ))}
    </div>
  );
};

export default Mosaic;
