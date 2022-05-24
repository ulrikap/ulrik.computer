export interface IHeaderMenuProps {
  children: React.ReactNode[];
}

export const defaultStyle: React.CSSProperties = {
  padding: 0,
  margin: 0,
  display: "grid",
};

const HeaderMenu = ({ children }: IHeaderMenuProps) => {
  return <ul style={defaultStyle}>{children}</ul>;
};

export default HeaderMenu;
