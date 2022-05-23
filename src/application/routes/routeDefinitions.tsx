import { RouteProps } from "react-router";
import { Blog, Landing } from "../../view/pages";

export const routeDefinitions: Array<RouteProps> = [
  {
    path: "",
    element: <Landing />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
];
