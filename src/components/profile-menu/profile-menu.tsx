// src\components\profile-menu\profile-menu.tsx
import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ProfileMenuUI } from '@ui';
<<<<<<< HEAD
import { useDispatch } from '@store';
import { logoutUserThunk } from '../../services/user/actions';
=======
import { useDispatch } from '../../services/store';
import { logout } from '../../services/slices/userSlice';
>>>>>>> 938b4d3323a03e095b1fb5951ec7a7434af8824a

export const ProfileMenu: FC = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
<<<<<<< HEAD

  const handleLogout = () => {
    <Navigate replace to={'/login'} />;
    dispatch(logoutUserThunk());
  };
=======
>>>>>>> 938b4d3323a03e095b1fb5951ec7a7434af8824a

  return <ProfileMenuUI handleLogout={() => dispatch(logout())} pathname={pathname} />;
};
