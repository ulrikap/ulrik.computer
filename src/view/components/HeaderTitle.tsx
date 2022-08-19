export interface IHeaderTitleProps {
  title: string;
}

export const defaultStyle: React.CSSProperties = {
  textAlign: "start",
  textTransform: "uppercase",
  width: "100%",
  fontSize: "10rem",
  fontWeight: "300",
  display: "flex",
  flexWrap: "wrap",
  mixBlendMode: "darken",
  zIndex: "30",
  marginTop: "0",
  marginBottom: "0",
  marginLeft: "0.1em",
  marginRight: "0.1em",
  flex: 1,
  transition:
    " 0.5s" /* Add a transition effect (when scrolling - and font size is decreased) */,
};

const HeaderTitle = ({ title }: IHeaderTitleProps) => {
  return (
    <>
      <h1 style={defaultStyle} id="headerTitle">
        {" "}
        <b>Ulrik Palmstrøm</b>
        {title}
      </h1>
    </>
  );
};

export default HeaderTitle;
