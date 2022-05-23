import { Route, Routes } from "react-router";
import { routeDefinitions } from "./routeDefinitions";

const LocalRoutes = () => (
  <Routes>
    {routeDefinitions.map((item) => (
      <Route {...item} />
    ))}
  </Routes>
);

export default LocalRoutes;
