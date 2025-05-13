import { profileReducer } from "@entities/Profile";
import { fetchProfile } from "@entities/Profile/model/services/FetchProfile";
import ProfileCard from "@entities/Profile/ui/ProfileCard";
import { DynamicModuleLoader, ReducersList } from "@shared/lib/components/DynamicModuleLoader";
import { useAppDispatch } from "@shared/ui/hooks/redux";
import { useEffect } from "react";

const initialReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <ProfileCard />
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
