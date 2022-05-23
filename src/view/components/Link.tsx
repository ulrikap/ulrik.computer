import { Link as RouterLink, LinkProps } from "react-router-dom";

export interface ILinkProps {
  ReactRouterLinkProps: LinkProps;
  children?: React.ReactNode | React.ReactNode[];
}

const Link = (props: ILinkProps) => (
  <RouterLink {...props.ReactRouterLinkProps}>{props.children}</RouterLink>
);

export default Link;
