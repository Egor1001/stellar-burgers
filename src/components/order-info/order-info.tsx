<<<<<<< HEAD
// src\components\order-info\order-info.tsx
import { FC, useEffect, useMemo } from 'react';
import { Preloader } from '../ui/preloader';
import { OrderInfoUI } from '../ui/order-info';
import { TIngredient } from '@utils-types';
import { useDispatch, useSelector } from '@store';
import { selectIngredients } from '../../services/ingredients/ingredients-slice';
import { useParams } from 'react-router-dom';
import { selectOrderByNumber } from '../../services/orders/orders-slice';
import { getOrderByNumberThunk } from '../../services/orders/actions';
=======
import { FC, useMemo, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Preloader } from '../ui/preloader';
import { OrderInfoUI } from '../ui/order-info';
import { TIngredient, TOrder } from '@utils-types';
import { useSelector } from '../../services/store';
import { getOrderByNumberApi } from '@api';

const initialOrder: TOrder = {
  _id: '',
  status: '',
  name: '',
  createdAt: '',
  updatedAt: '',
  number: 0,
  ingredients: ['']
};
>>>>>>> 938b4d3323a03e095b1fb5951ec7a7434af8824a

// карточка заказа в модальном окне, при нажатии на заказ в ленте
export const OrderInfo: FC = () => {
<<<<<<< HEAD
  const { number } = useParams<{ number: string }>();
  const orderNumber = Number(number);

  /** TODO: взять переменные orderData и ingredients из стора */
  const orderData = useSelector(selectOrderByNumber);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderByNumberThunk(orderNumber));
  }, []);

  const ingredients: TIngredient[] = useSelector(selectIngredients);
=======
  const [orderData, setOrderData] = useState<TOrder>(initialOrder);

  const ingredients: TIngredient[] = useSelector(
    (state) => state.ingredients.ingredients
  );
  const id = useParams().number;
>>>>>>> 938b4d3323a03e095b1fb5951ec7a7434af8824a

  const orderInfo = useMemo(() => {
    if (!orderData || !ingredients.length) return null;

    const date = new Date(orderData.createdAt);

    type TIngredientsWithCount = {
      [key: string]: TIngredient & { count: number };
    };

    const ingredientsInfo = orderData.ingredients.reduce(
      (acc: TIngredientsWithCount, item) => {
        if (!acc[item]) {
          const ingredient = ingredients.find(
            (element) => element._id === item
          );
          if (ingredient) {
            acc[item] = {
              ...ingredient,
              count: 1
            };
          }
        } else {
          acc[item].count++;
        }

        return acc;
      },
      {}
    );

    const total = Object.values(ingredientsInfo).reduce(
      (acc, item) => acc + item.price * item.count,
      0
    );

    return {
      ...orderData,
      ingredientsInfo,
      date,
      total
    };
  }, [orderData, ingredients]);

<<<<<<< HEAD
=======
  useEffect(() => {
    getOrderByNumberApi(Number(id)).then((data) => {
      setOrderData(data.orders[0]);
    });
  }, []);

>>>>>>> 938b4d3323a03e095b1fb5951ec7a7434af8824a
  if (!orderInfo) {
    return <Preloader />;
  }

  return <OrderInfoUI orderInfo={orderInfo} />;
};
