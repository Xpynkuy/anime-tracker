import { useSelector } from "react-redux";
import { getProfileData } from "../model/selectors/getProfileData/getProfileData";
import { getProfileError } from "../model/selectors/getProfileError/getProfileError";
import { getProfileIsLoading } from "../model/selectors/getProfileIsLoading/getProfileIsLoading";
import styles from "./ProfileCard.module.scss";

const ProfileCard = () => {
  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);

  return (
    <div className={styles.profileCard}>
      <div className={styles.header}>
        <img src="./public/avatar.jpg" className={styles.avatar} />
        <h2 className={styles.name}>{data?.name}</h2>
      </div>
    </div>
  );
};

export default ProfileCard;
