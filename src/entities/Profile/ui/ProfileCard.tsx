import styles from "./ProfileCard.module.scss";
import Button, { ButtonVariant } from "@shared/ui/button/Button";
import Input, { InputTextSize, InputTheme } from "@shared/ui/input/Input";
import { Profile } from "../model/type/profile";
import { useSelector } from "react-redux";
import { getProfileReadonly } from "../model/selectors/getProfileReadonly/getProfileReadonly";
import { useAppDispatch } from "@shared/ui/hooks/redux";
import { useCallback } from "react";
import { profileActions } from "../model/slice/profileSlice";

interface ProfileCardProps {
  data?: Profile;
  isLoading?: boolean;
  error?: string;
}

const ProfileCard = (props: ProfileCardProps) => {
  const { data, isLoading, error } = props;

  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(true));
  }, [dispatch]);

  const onChangeUserName = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ name: value || "" }));
    },
    [dispatch]
  );
  const onChangeGender = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ gender: value || "" }));
    },
    [dispatch]
  );

  return (
    <div className={styles.profileCard}>
      <div className={styles.header}>
        <div className={styles.content}>
          <img src={data?.avatar} className={styles.avatar} />
          <div className={styles.info}>
            <Input
              readonly={readonly}
              onChange={onChangeUserName}
              theme={InputTheme.TRANSPARENT}
              value={data?.name}
            ></Input>
            <Input
              readonly={readonly}
              onChange={onChangeGender}
              theme={InputTheme.TRANSPARENT}
              size={InputTextSize.MEDIUM}
              value={data?.gender}
            ></Input>
          </div>
        </div>
        <div className={styles.edit}>
          {readonly ? (
            <Button onClick={onEdit} variant={ButtonVariant.PRIMARY}>
              Edit profile
            </Button>
          ) : (
            <div className={styles.editChange}>
              <Button onClick={onCancelEdit} variant={ButtonVariant.PRIMARY}>
                Cancel
              </Button>
              <Button onClick={onCancelEdit} variant={ButtonVariant.SECONDARY}>
                Save
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
