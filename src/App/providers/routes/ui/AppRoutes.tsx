import { CatalogPage } from "@pages/catalog";
import { CollectionsPage } from "@pages/collections";
import { MainPage } from "@pages/main";
import { NewsPage } from "@pages/news";
import NotFoundPage from "@pages/NotFoundPage/NotFoundPage";
import { Layout } from "@widgets/layout";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="collections" element={<CollectionsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
