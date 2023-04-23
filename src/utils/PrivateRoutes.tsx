import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import type { RootState } from "../reduxStore/store";
import { useSelector, useDispatch } from "react-redux";
type Props = {};

/* protect routes from being accessed when not logged in */
const PrivateRoutes = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.user.authenticated
  );

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
