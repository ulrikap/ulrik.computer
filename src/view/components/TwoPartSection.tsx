export interface ITwoPartSectionProps {
  children?: [React.ReactNode, React.ReactNode];
  reverse?: boolean;
}

export const defaultStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0px, 1fr))",
  alignItems: "center",
  justifyItems: "center",
  margin: "20px 0px",
  width: "100%",
  height: "25vw",
};

const TwoPartSection = (props: ITwoPartSectionProps) => {
  return (
    <section
      style={{ ...defaultStyle, justifySelf: props.reverse ? "end" : "start" }}
    >
      {props.children}
    </section>
  );
};

export default TwoPartSection;
