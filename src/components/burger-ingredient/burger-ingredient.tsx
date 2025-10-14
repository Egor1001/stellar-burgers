// src\components\burger-ingredient\burger-ingredient.tsx

import { FC, memo } from 'react';
import { useLocation } from 'react-router-dom';

import { BurgerIngredientUI } from '@ui';
import { TBurgerIngredientProps } from './type';
<<<<<<< HEAD
import { useDispatch } from '@store';
import { addIngredient } from '../../services/constructor/constructor-slice';
=======
import { useDispatch, useSelector } from '../../services/store';
import {
  addConstructorItem,
  getIngredientsQuantitySelector
} from '../../services/slices/burgerConstructorSlice';
>>>>>>> 938b4d3323a03e095b1fb5951ec7a7434af8824a

export const BurgerIngredient: FC<TBurgerIngredientProps> = memo(
  ({ ingredient }) => {
    const location = useLocation();
    const dispatch = useDispatch();

    const handleAdd = () => {
<<<<<<< HEAD
      dispatch(addIngredient(ingredient));
=======
      dispatch(addConstructorItem(ingredient));
>>>>>>> 938b4d3323a03e095b1fb5951ec7a7434af8824a
    };

    const count = useSelector(getIngredientsQuantitySelector)[ingredient._id];

    return (
      <BurgerIngredientUI
        ingredient={ingredient}
        count={count}
        locationState={{ background: location }}
        handleAdd={handleAdd}
      />
    );
  }
);
