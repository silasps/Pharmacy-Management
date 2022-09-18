import { Navigate, Outlet } from "react-router-dom";
import { useLogin } from "../contexts/useLogin";


export function PrivateRoute() {
  const { loginData } = useLogin();
  
  return loginData ? <Outlet /> : <Navigate to="/login" replace />;
}
