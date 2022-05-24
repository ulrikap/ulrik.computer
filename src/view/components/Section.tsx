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
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "20px 0",
  backgroundColor: "red",
  width: "calc(50vw - ((100vw - 100%)/2))",
  height: "50vw",
};

const Section = (props: ISectionProps) => {
  return (
    <section
      style={{ ...defaultStyle, justifySelf: props.even ? "end" : "start" }}
      {...props.SectionProps}
    >
      {" "}
      {props.children}
    </section>
  );
};

export default Section;
