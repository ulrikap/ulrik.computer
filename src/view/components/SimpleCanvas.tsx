export type ISimpleCanvasProps = React.DetailedHTMLProps<
  React.CanvasHTMLAttributes<HTMLCanvasElement>,
  HTMLCanvasElement
>;

const SimpleCanvas = (props: ISimpleCanvasProps) => {
  return <canvas {...props}></canvas>;
};

export default SimpleCanvas;
