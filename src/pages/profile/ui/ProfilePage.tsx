import {
  getProfileData,
  getProfileError,
  getProfileIsLoading,
  profileReducer,
} from "@entities/Profile";
import { fetchProfile } from "@entities/Profile/model/services/FetchProfile";
import ProfileCard from "@entities/Profile/ui/ProfileCard";

import {
  DynamicModuleLoader,
  ReducersList,
} from "@shared/lib/components/DynamicModuleLoader";
import { useAppDispatch } from "@shared/ui/hooks/redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const initialReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const dispatch = useAppDispatch();

  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <ProfileCard data={data} isLoading={isLoading} error={error} />
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
