export interface ITwoPartSectionProps {
  children?: [React.ReactNode, React.ReactNode];
  reverse?: boolean;
}

export const defaultStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0px, 1fr))",
  alignItems: "center",
  justifyContent: "center",
  margin: "20px 20px",
  width: "calc(75vw - ((100vw - 100%)/2))",
  height: "50vw",
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
