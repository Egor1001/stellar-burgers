// src\components\ui\ingredients-category\ingredients-category.tsx
import styles from './ingredients-category.module.css';
import { forwardRef } from 'react';
import { TIngredientsCategoryUIProps } from './type';
import { BurgerIngredient } from '@components';

export const IngredientsCategoryUI = forwardRef<
  HTMLUListElement,
  TIngredientsCategoryUIProps
<<<<<<< HEAD
>(({ title, titleRef, ingredients, ingredientsCounters }, ref) => (
=======
>(({ title, titleRef, ingredients }, ref) => (
>>>>>>> 938b4d3323a03e095b1fb5951ec7a7434af8824a
  <>
    <h3 className='text text_type_main-medium mt-10 mb-6' ref={titleRef}>
      {title}
    </h3>
    <ul className={styles.items} ref={ref}>
      {ingredients.map((ingredient) => (
        <BurgerIngredient ingredient={ingredient} key={ingredient._id} />
      ))}
    </ul>
  </>
));
