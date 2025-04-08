import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";
import { Header } from "@widgets/header";
import Loader from "@shared/ui/loader/Loader";
import { Footer } from "@widgets/footer";

export const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};
