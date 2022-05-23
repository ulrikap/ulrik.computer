// No content

export interface ISectionProps {
  SectionProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >;
  children?: React.ReactNode | React.ReactNode[];
}

const defaultStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const Section = (props: ISectionProps) => {
  return (
    <section style={defaultStyle} {...props.SectionProps}>
      {" "}
      {props.children}
    </section>
  );
};

export default Section;
