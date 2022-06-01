export interface IImageProps {
  src: string;
}

export const defaultStyle: React.CSSProperties = {
  position: "relative",
  height: "100%",
  width: "100%",
};

const Image = ({ src }: IImageProps) => {
  return <img src={src} style={defaultStyle} />;
};

export default Image;
