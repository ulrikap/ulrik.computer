import { lazy, useEffect } from "react";

export type ISimpleCanvasProps = React.DetailedHTMLProps<
  React.CanvasHTMLAttributes<HTMLCanvasElement>,
  HTMLCanvasElement
>;

const SimpleCanvas = (props: ISimpleCanvasProps) => {
  useEffect(() => {
    lazy(() => import("@webgl/threejs/Boxes"));
  });
  return <canvas {...props}></canvas>;
};

export default SimpleCanvas;
