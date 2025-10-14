import { forwardRef, useMemo } from 'react';
import { TIngredientsCategoryProps } from './type';
import { TIngredient } from '@utils-types';
import { IngredientsCategoryUI } from '../ui/ingredients-category';
<<<<<<< HEAD
import { useSelector } from '@store';
import { selectBurgerConstructor } from '../../services/constructor/constructor-slice';
=======
>>>>>>> 938b4d3323a03e095b1fb5951ec7a7434af8824a

export const IngredientsCategory = forwardRef<
  HTMLUListElement,
  TIngredientsCategoryProps
>(({ title, titleRef, ingredients }, ref) => {
<<<<<<< HEAD
  /** TODO: взять переменную из стора */
  const burgerConstructor = useSelector(selectBurgerConstructor);
=======
  // const burgerConstructor = {
  //   bun: {
  //     _id: ''
  //   },
  //   ingredients: []
  // };
>>>>>>> 938b4d3323a03e095b1fb5951ec7a7434af8824a

  // НЕ РАБОТАЕТ ¯ \ _ (ツ) _ / ¯
  // const ingredientsCounters = useMemo(() => {
  //   const { bun, ingredients } = burgerConstructor;
  //   const counters: { [key: string]: number } = {};
  //   ingredients.forEach((ingredient: TIngredient) => {
  //     if (!counters[ingredient._id]) counters[ingredient._id] = 0;
  //     counters[ingredient._id]++;
  //   });
  //   if (bun) counters[bun._id] = 2;
  //   return counters;
  // }, [burgerConstructor]);

  return (
    <IngredientsCategoryUI
      title={title}
      titleRef={titleRef}
      ingredients={ingredients}
      ref={ref}
    />
  );
});
