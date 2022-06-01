export interface ISectionProps {
  SectionProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >;
  children?: React.ReactNode | React.ReactNode[];
  even?: boolean;
  blank?: boolean;
}

export const defaultStyle: React.CSSProperties = {
  display: "grid",
  alignItems: "start",
  margin: "auto",
  width: "80vw",
};

const Section = (props: ISectionProps) => {
  const styles = { ...defaultStyle, ...props.SectionProps?.style };

  return (
    <section style={{ ...styles, justifySelf: props.even ? "end" : "start" }}>
      {" "}
      {props.children}
    </section>
  );
};

export default Section;
