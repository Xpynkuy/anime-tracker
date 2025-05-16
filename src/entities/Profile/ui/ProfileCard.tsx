import styles from "./ProfileCard.module.scss";
import Button, { ButtonVariant } from "@shared/ui/button/Button";
import Input, { InputTextSize, InputTheme } from "@shared/ui/input/Input";
import { Profile, ValidateProfileError } from "../model/type/profile";
import { useSelector } from "react-redux";
import { getProfileReadonly } from "../model/selectors/getProfileReadonly/getProfileReadonly";
import Loader from "@shared/ui/loader/Loader";

interface ProfileCardProps {
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  onChangeUserName: (value: string) => void;
  onChangeDesc: (value: string) => void;
  onSave: () => void;
  onEdit: () => void;
  onCancelEdit: () => void;
  validateErrors?: ValidateProfileError[];
}

const ProfileCard = (props: ProfileCardProps) => {
  const {
    data,
    isLoading,
    error,
    onChangeUserName,
    onChangeDesc,
    onSave,
    onEdit,
    onCancelEdit,
    validateErrors,
  } = props;

  const readonly = useSelector(getProfileReadonly);

  const nameError = validateErrors?.find((err) =>
    [
      ValidateProfileError.EMPTY_NAME,
      ValidateProfileError.SHORT_NAME,
      ValidateProfileError.LONG_NAME,
    ].includes(err)
  );

  const descError = validateErrors?.find((err) =>
    [
      ValidateProfileError.EMPTY_DESC,
      ValidateProfileError.SHORT_DESC,
      ValidateProfileError.LONG_DESC,
    ].includes(err)
  );

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className={styles.error}>
        <h2>Something went wrong</h2>
      </div>
    );
  }

  return (
    <div className={styles.profileCard}>
      <div className={styles.header}>
        <div className={styles.content}>
          <img src={data?.avatar} className={styles.avatar} />
          <div className={styles.info}>
            {!readonly && nameError && (
              <div className={styles.errorText} id="name-error">
                {nameError}
              </div>
            )}
            <Input
              value={data?.name ?? ""}
              readonly={readonly}
              onChange={onChangeUserName}
              theme={InputTheme.TRANSPARENT}
              size={InputTextSize.XL}
              hasError={!!nameError}
              describedById={nameError ? "name-error" : undefined}
            ></Input>
            {!readonly && descError && (
              <div className={styles.errorText} id="desc-error">
                {descError}
              </div>
            )}
            <Input
              value={data?.desc ?? ""}
              readonly={readonly}
              onChange={onChangeDesc}
              theme={InputTheme.TRANSPARENT}
              size={InputTextSize.MEDIUM}
              hasError={!!descError}
              describedById={descError ? "desc-error" : undefined}
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
              <Button onClick={onSave} variant={ButtonVariant.SECONDARY}>
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
