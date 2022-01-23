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
        <div key={index}>{pixel}</div>
      ))}
    </div>
  );
};

export default Mosaic;
