import { FC, FormEvent, useState } from 'react';
import { LoginUI } from '@ui-pages';
<<<<<<< HEAD
import { useDispatch, useSelector } from '@store';
import { loginUserThunk } from '../../services/user/actions';
import { selectUserLoading } from '../../services/user/user-slice';
import { Preloader } from '@ui';

export const Login: FC = () => {
  const [email, setEmail] = useState('artem812@mail.ru');
  const [password, setPassword] = useState('123456789');
  const dispatch = useDispatch();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(loginUserThunk({ email, password }));
  };

  // это как-то не видно, что срабатывает
  const loading = useSelector(selectUserLoading);
  if (loading) return <Preloader />;

=======
import { useDispatch, useSelector } from '../../services/store';
import { login } from '../../services/slices/userSlice';
import { useNavigate } from 'react-router-dom';

export const Login: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.userData.error);
  const user = useSelector((state) => state.userData.user);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await dispatch(
      login({
        email: email,
        password: password
      })
    );

    if (!error && user) {
      navigate('/'); // Redirect to home page
    }
  };

>>>>>>> 938b4d3323a03e095b1fb5951ec7a7434af8824a
  return (
    <LoginUI
      errorText={error!}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
    />
  );
};
