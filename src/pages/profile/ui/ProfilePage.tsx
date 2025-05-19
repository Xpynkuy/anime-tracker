import {
  getProfileError,
  getProfileIsLoading,
  profileActions,
  profileReducer,
} from "@entities/Profile";
import { getProfileValidateError } from "@entities/Profile/model/selectors/gerProfileValidateError/getProfileValidateError";
import { getProfileForm } from "@entities/Profile/model/selectors/getProfileForm/getProfileForm";
import { fetchProfile } from "@entities/Profile/model/services/FetchProfile";
import { updateProfileForm } from "@entities/Profile/model/services/UpdateProfileForm";
import ProfileCard from "@entities/Profile/ui/ProfileCard";
import { getUserAuthData } from "@entities/User";

import {
  DynamicModuleLoader,
  ReducersList,
} from "@shared/lib/components/DynamicModuleLoader";
import { useAppDispatch } from "@shared/ui/hooks/redux";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";

const initialReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const dispatch = useAppDispatch();

  const formData = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const validateErrors = useSelector(getProfileValidateError);
  const authData = useSelector(getUserAuthData);

  useEffect(() => {
    if (authData) {
      dispatch(fetchProfile());
    }
  }, [dispatch, authData]);

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.onCancel());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileForm());
  }, [dispatch]);

  const onChangeUserName = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ name: value || "" }));
    },
    [dispatch]
  );

  const onChangeDesc = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ desc: value || "" }));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <ProfileCard
        data={formData}
        isLoading={isLoading}
        error={error}
        onSave={onSave}
        onEdit={onEdit}
        onCancelEdit={onCancelEdit}
        onChangeUserName={onChangeUserName}
        onChangeDesc={onChangeDesc}
        validateErrors={validateErrors}
      />
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
