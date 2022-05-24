import Link from "@view/components/Link";
import type { ILinkProps } from "@view/components/Link";

export type THeaderMenuItem = { title: string; linkProps: ILinkProps };

export const defaultStyle: React.CSSProperties = {
  justifySelf: "center",
  alignSelf: "center",
  margin: "10px",
  fontSize: "2rem",
  fontWeight: "300",
};

const HeaderMenuItem = (item: THeaderMenuItem) => {
  return (
    <h2 style={defaultStyle}>
      <Link {...item.linkProps}>{item.title}</Link>
    </h2>
  );
};

export default HeaderMenuItem;
