import { useAppDispatch } from "@shared/ui/hooks/redux";
import { AppRoutes } from "./providers/routes";
import "./styles/global.css";
import { useEffect } from "react";
import { userActions } from "@entities/User";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, []);
  
  return (
    <div className="app">
      <AppRoutes />
    </div>
  );
}

export default App;
