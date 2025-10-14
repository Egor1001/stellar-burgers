import { FC, SyntheticEvent, useState } from 'react';
import { RegisterUI } from '@ui-pages';
<<<<<<< HEAD
import { useDispatch } from '@store';
import { registerUserThunk } from '../../services/user/actions';
=======
import { useDispatch, useSelector } from '../../services/store';
import { register } from '../../services/slices/userSlice';
import { useNavigate } from 'react-router-dom';
>>>>>>> 938b4d3323a03e095b1fb5951ec7a7434af8824a

export const Register: FC = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
<<<<<<< HEAD
=======

>>>>>>> 938b4d3323a03e095b1fb5951ec7a7434af8824a
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.userData.error);
  const user = useSelector((state) => state.userData.user);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(
<<<<<<< HEAD
      registerUserThunk({ name: userName, email: email, password: password })
    );
=======
      register({
        email: email,
        name: userName,
        password: password
      })
    );

    if (!error && user) {
      navigate('/'); // Redirect to home page
    }
>>>>>>> 938b4d3323a03e095b1fb5951ec7a7434af8824a
  };

  return (
    <RegisterUI
      errorText={error? error : undefined}
      email={email}
      userName={userName}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      setUserName={setUserName}
      handleSubmit={handleSubmit}
    />
  );
};
