import type { Image } from "./types";

type Props = {
  image: Image;
};

const Mosaic = ({ image }: Props) => {
  return <>{image}</>;
};

export default Mosaic;
