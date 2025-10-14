<<<<<<< HEAD
// src\components\burger-constructor\burger-constructor.tsx

import { FC, useMemo } from 'react';
import { TConstructorIngredient } from '@utils-types';
import { BurgerConstructorUI } from '@ui';

import { useSelector, useDispatch } from '@store';
import {
  selectNewOrder,
  selectOrderRequest,
  setNewOrder
} from '../../services/orders/orders-slice';
import { useLocation, useNavigate } from 'react-router-dom';
import { postUserBurderThunk } from '../../services/orders/actions';
import {
  clearBurger,
  selectBurgerConstructor
} from '../../services/constructor/constructor-slice';
import { selectUser } from '../../services/user/user-slice';

export const BurgerConstructor: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector(selectUser);

  const userBurger = useSelector(selectBurgerConstructor);

  // ждем ответа сервера
  const orderRequest = useSelector(selectOrderRequest);
  // данные нового заказа
  const orderModalData = useSelector(selectNewOrder).order;

  const onOrderClick = () => {
    if (!userBurger.bun || orderRequest) {
      return;
    }

    if (!user) {
      return navigate('/login', {
        replace: true,
        state: {
          from: {
            ...location,
            background: location.state?.background,
            state: null
          }
        }
      });
    } else {
      const from = location.state?.from || { pathname: '/' };
      const backgroundLocation = location.state?.from?.background || null;

      const itemsId = [
        userBurger.bun._id,
        ...userBurger.ingredients.map((ingredient) => ingredient._id),
        userBurger.bun._id
      ];

      dispatch(postUserBurderThunk(itemsId)).then(() =>
        dispatch(clearBurger())
      );
      return navigate(from, {
        replace: true,
        state: { background: backgroundLocation }
      });
    }
  };

  const closeOrderModal = () => {
    dispatch(setNewOrder(false));
  };

  const price = useMemo(
    () =>
      (userBurger.bun ? userBurger.bun.price * 2 : 0) +
      userBurger.ingredients.reduce(
        (s: number, v: TConstructorIngredient) => s + v.price,
        0
      ),
    [userBurger]
  );
=======
import { FC, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { TConstructorIngredient } from '@utils-types';
import { BurgerConstructorUI } from '@ui';
import { useSelector, useDispatch } from '../../services/store';
import {
  newBurgerOrder,
  clearOrder
} from '../../services/slices/newOrderSlice';
import { clearConstructor } from '../../services/slices/burgerConstructorSlice';

export const BurgerConstructor: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userIsAuth = useSelector((state) => state.userData.isAuthChecked);
  const constructorItems = useSelector((state) => state.burgerConstructor);
  const { orderRequest, order } = useSelector((state) => state.newOrder);

  const price = useMemo(() => {
    return (
      (constructorItems.bun ? constructorItems.bun.price * 2 : 0) +
      constructorItems.ingredients.reduce(
        (sum: number, ingredient: TConstructorIngredient) =>
          sum + ingredient.price,
        0
      )
    );
  }, [constructorItems]);

  const onOrderClick = useCallback(() => {
    if (!userIsAuth) {
      navigate('/login');
    }
    
    if (constructorItems.bun && constructorItems.ingredients.length > 0) {
      const dataToOrder = [
        constructorItems.bun._id,
        ...constructorItems.ingredients.map((ingredient) => ingredient._id),
        constructorItems.bun._id
      ];
      dispatch(newBurgerOrder(dataToOrder));
    }
  }, [userIsAuth, constructorItems, dispatch, navigate]);

  const closeOrderModal = (() => {
    dispatch(clearOrder());
    dispatch(clearConstructor());
    navigate('/');
  });
>>>>>>> 938b4d3323a03e095b1fb5951ec7a7434af8824a

  return (
    <BurgerConstructorUI
      price={price}
      orderRequest={orderRequest}
<<<<<<< HEAD
      constructorItems={userBurger}
      orderModalData={orderModalData}
=======
      constructorItems={constructorItems}
      orderModalData={order}
>>>>>>> 938b4d3323a03e095b1fb5951ec7a7434af8824a
      onOrderClick={onOrderClick}
      closeOrderModal={closeOrderModal}
    />
  );
};
