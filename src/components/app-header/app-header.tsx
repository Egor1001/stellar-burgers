// src\components\app-header\app-header.tsx
import { FC } from 'react';
import { AppHeaderUI } from '@ui';
<<<<<<< HEAD
import { useSelector } from '@store';
import { selectUser } from '../../services/user/user-slice';

export const AppHeader: FC = () => {
  const userName = useSelector(selectUser)?.name;

  return <AppHeaderUI userName={userName ? userName : ''} />;
=======
import { useSelector } from '../../services/store';
import { getUserState } from '../../services/slices/userSlice';

export const AppHeader: FC = () => {
  const userState = useSelector(getUserState);
  return <AppHeaderUI userName={userState.user?.name}/>;
>>>>>>> 938b4d3323a03e095b1fb5951ec7a7434af8824a
};
