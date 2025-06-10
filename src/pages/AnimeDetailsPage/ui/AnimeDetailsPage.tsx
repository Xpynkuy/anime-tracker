import { AnimeDetails } from "@entities/AnimeDetails/ui/AnimeDetails/AnimeDetails";
import { memo } from "react";

const AnimeDetailsPage = () => {
  return (
    <>
      <AnimeDetails />
    </>
  );
};

export default memo(AnimeDetailsPage);
