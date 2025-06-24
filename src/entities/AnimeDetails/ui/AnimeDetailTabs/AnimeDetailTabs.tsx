import { Anime } from "@shared/api/type/type";
import Tabs from "@shared/ui/tabs/Tabs";
import styles from "./AnimeDetailTabs.module.scss";
import parse from "html-react-parser";
import Skeleton from "@shared/ui/skeleton/Skeleton";

interface AnimeDetailTabsProps {
  anime: Anime;
  isLoading?: boolean;
}

const AnimeDetailTabs = ({ anime, isLoading }: AnimeDetailTabsProps) => {
  if (isLoading) {
    return (
      <div className={styles.tabsSkeleton}>
        <div className={styles.tabHeadersSkeleton}></div>
        <div className={styles.tabContentSkeleton}>
          <div className={styles.overviewContainer}>
            <div className={styles.details}>
              <Skeleton width="150px" height="32px" border="4px" />
              <div className={styles.tableSkeleton}>
                {[...Array(8)].map((_, index) => (
                  <div key={index} className={styles.tableRowSkeleton}>
                    <Skeleton width="80px" height="24px" border="4px" />
                    <Skeleton width="200px" height="24px" border="4px" />
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.description}>
              <Skeleton width="150px" height="32px" border="4px" />
              <div className={styles.descriptionSkeleton}>
                <Skeleton width="100%" height="20px" border="4px" />
                <Skeleton width="90%" height="20px" border="4px" />
                <Skeleton width="95%" height="20px" border="4px" />
                <Skeleton width="85%" height="20px" border="4px" />
                <Skeleton width="100%" height="20px" border="4px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!anime) return null;

  const formatDescription = (htmlString?: string) => {
    if (!htmlString) return "No description available";
    return parse(htmlString);
  };
  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "staff", label: "Staff" },
  ];

  return (
    <Tabs tabs={tabs} defaultActiveTab="overview">
      {(tab) => {
        if (tab === "overview") {
          return (
            <div className={styles.overviewContainer}>
              <div className={styles.details}>
                <h2>Details</h2>
                <table className={styles.table}>
                  <tbody className={styles.tableBody}>
                    <tr>
                      <td>Title</td>
                      <td>{anime.title?.romaji || "N/A"}</td>
                    </tr>
                    <tr>
                      <td>Type</td>
                      <td>{anime.format || "N/A"}</td>
                    </tr>
                    <tr>
                      <td>Episodes</td>
                      <td>{anime.episodes || "N/A"}</td>
                    </tr>
                    <tr>
                      <td>Genres</td>
                      <td>{anime.genres?.join(", ")}</td>
                    </tr>
                    <tr>
                      <td>Status</td>
                      <td>{anime.status}</td>
                    </tr>
                    <tr>
                      <td>Season</td>
                      <td>{anime.seasonYear || "N/A"}</td>
                    </tr>
                    <tr>
                      <td>Source</td>
                      <td>{anime.source || "N/A"}</td>
                    </tr>
                    <tr>
                      <td>Duration</td>
                      <td>{anime.duration || "N/A"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className={styles.description}>
                <h2 className={styles.descriptionTitle}>Description</h2>
                <p className={styles.descriptionText}>
                  {formatDescription(anime.description)}
                </p>
              </div>
            </div>
          );
        }
        return (
          <div className={styles.staffContainer}>
            {anime.staff.edges.slice(0, 8).map((staff, index) => (
              <div key={index} className={styles.staffItem}>
                <img
                  src={staff.node.image.medium}
                  alt={staff.node.name.full}
                  className={styles.staffImage}
                />
                <div className={styles.staffInfo}>
                  <h3 className={styles.staffName}>{staff.node.name.full}</h3>
                  <p className={styles.staffRole}>{staff.role}</p>
                </div>
              </div>
            ))}
          </div>
        );
      }}
    </Tabs>
  );
};

export default AnimeDetailTabs;
