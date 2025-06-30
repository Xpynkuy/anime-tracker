import { CatalogPage } from "@pages/catalog";
import { MainPage } from "@pages/main";
import NotFoundPage from "@pages/NotFoundPage/NotFoundPage";
import { ProfilePage } from "@pages/profile";
import { Layout } from "@widgets/layout";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { AnimeDetailsPage } from "@pages/AnimeDetailsPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="anime/:id" element={<AnimeDetailsPage />} />
        <Route
          path="profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
