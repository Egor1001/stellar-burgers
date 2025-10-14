import { FC, memo } from 'react';
import { BurgerConstructorElementUI } from '@ui';
import { BurgerConstructorElementProps } from './type';
import { useDispatch } from '@store';
import {
<<<<<<< HEAD
  removeIngredient,
  swapIngredient
} from '../../services/constructor/constructor-slice';
=======
  removeConstructorItem,
  moveConstructorItem
} from '../../services/slices/burgerConstructorSlice';
>>>>>>> 938b4d3323a03e095b1fb5951ec7a7434af8824a

export const BurgerConstructorElement: FC<BurgerConstructorElementProps> = memo(
  ({ ingredient, index, totalItems }) => {
    const dispatch = useDispatch();

    const handleMoveDown = () => {
<<<<<<< HEAD
      dispatch(swapIngredient({ first: index, second: index + 1 }));
    };

    const handleMoveUp = () => {
      dispatch(swapIngredient({ first: index, second: index - 1 }));
    };

    const handleClose = () => {
      dispatch(removeIngredient(ingredient._id));
=======
      dispatch(moveConstructorItem({ index: index, move: 'down' }));
    };

    const handleMoveUp = () => {
      dispatch(moveConstructorItem({ index: index, move: 'up' }));
    };

    const handleDelete = () => {
      dispatch(removeConstructorItem(ingredient.id));
>>>>>>> 938b4d3323a03e095b1fb5951ec7a7434af8824a
    };

    return (
      <BurgerConstructorElementUI
        ingredient={ingredient}
        index={index}
        totalItems={totalItems}
        handleMoveUp={handleMoveUp}
        handleMoveDown={handleMoveDown}
        handleClose={handleDelete}
      />
    );
  }
);
