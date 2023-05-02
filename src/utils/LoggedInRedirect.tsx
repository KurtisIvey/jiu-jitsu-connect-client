import { Route, Navigate, Outlet } from "react-router-dom";
import type { RootState } from "../reduxStore/store";
import { useSelector, useDispatch } from "react-redux";

/* protect routes from being accessed when not logged in */
const LoggedInRedirect = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.user.authenticated
  );

  return isAuthenticated ? <Navigate to="/home" /> : <Outlet />;
};

export default LoggedInRedirect;
