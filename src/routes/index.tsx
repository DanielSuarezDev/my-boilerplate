import { Route, Routes } from "react-router-dom";

import { ROUTES } from "./types";
import { HomeLoad } from "../pages/Home";
import { LoginLoad } from "../pages/Login";

const AppRouter = () => {
  return (
      <Routes>
        <Route path={ROUTES.HOME} element={<HomeLoad />} />
        <Route path={ROUTES.LOGIN} element={<LoginLoad />} />
      </Routes>
  );
};

export default AppRouter;
