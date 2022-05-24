import { Link as RouterLink } from "react-router-dom";
import type { LinkProps } from "react-router-dom";

export interface ILinkProps {
  ReactRouterLinkProps: LinkProps;
  children?: React.ReactNode | React.ReactNode[];
}

export const defaultStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "blue",
};

const Link = (props: ILinkProps) => (
  <RouterLink {...props.ReactRouterLinkProps} style={defaultStyle}>
    {props.children}
  </RouterLink>
);

export default Link;
