import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@entities/User";
import { getUserInited } from "@entities/User/model/selectors/getInited/getUserInited";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const auth = useSelector(getUserAuthData);
  const inited = useSelector(getUserInited);

  if (!inited) {
    return null;
  }

  if (!auth) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
