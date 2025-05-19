import { useAppDispatch } from "@shared/ui/hooks/redux";
import { AppRoutes } from "./providers/routes";
import "./styles/global.css";
import { useEffect } from "react";
import { userActions } from "@entities/User";
import { useSelector } from "react-redux";
import { getUserInited } from "@entities/User/model/selectors/getInited/getUserInited";

function App() {
  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, []);

  return <div className="app">{inited && <AppRoutes />}</div>;
}

export default App;
