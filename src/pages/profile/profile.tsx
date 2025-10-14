<<<<<<< HEAD
import { useDispatch, useSelector } from '@store';
import { ProfileUI } from '@ui-pages';
import { FC, SyntheticEvent, useEffect, useState } from 'react';
import { updateUserThunk } from '../../services/user/actions';
import { TRegisterData } from '@api';
import { selectUser } from '../../services/user/user-slice';

export const Profile: FC = () => {
  const dispatch = useDispatch();
=======
import { FC, SyntheticEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ProfileUI } from '@ui-pages';
import { useSelector, useDispatch } from '../../services/store';
import { updateUser } from '../../services/slices/userSlice';

export const Profile: FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userData.user!);
>>>>>>> 938b4d3323a03e095b1fb5951ec7a7434af8824a

  /** TODO: взять переменную из стора */
  const user = useSelector(selectUser);
  if (!user) return null;

  // const [formValue, setFormValue] = useState({
  const [formValue, setFormValue] = useState<Partial<TRegisterData>>({
    name: user.name,
    email: user.email,
    password: ''
  });

  useEffect(() => {
    setFormValue((prevState) => ({
      ...prevState,
      name: user?.name || '',
      email: user?.email || ''
    }));
  }, [user]);

  const isFormChanged =
    formValue.name !== user?.name ||
    formValue.email !== user?.email ||
    !!formValue.password;

<<<<<<< HEAD
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(updateUserThunk(formValue));
=======
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(updateUser(formValue));
>>>>>>> 938b4d3323a03e095b1fb5951ec7a7434af8824a
  };

  const handleCancel = (e: SyntheticEvent) => {
    e.preventDefault();
    setFormValue({
      name: user.name,
      email: user.email,
      password: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <ProfileUI
      formValue={{
        name: formValue.name || '',
        email: formValue.email || '',
        password: formValue.password || ''
      }}
      isFormChanged={isFormChanged}
      handleCancel={handleCancel}
      handleSubmit={handleSubmit}
      handleInputChange={handleInputChange}
    />
  );

  return null;
};
