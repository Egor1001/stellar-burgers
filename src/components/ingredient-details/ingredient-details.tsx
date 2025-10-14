import { FC } from 'react';
<<<<<<< HEAD
import { Preloader } from '../ui/preloader';
import { IngredientDetailsUI } from '../ui/ingredient-details';
import { useSelector } from '@store';
import { useParams } from 'react-router-dom';
import { selectIngredients } from '../../services/ingredients/ingredients-slice';

export const IngredientDetails: FC = () => {
  const id = String(Object.values(useParams()));

  const ingredientData = useSelector(selectIngredients).find(
=======
import { useParams } from 'react-router-dom';
import { useSelector } from '../../services/store';
import { Preloader } from '../ui/preloader';
import { IngredientDetailsUI } from '../ui/ingredient-details';

export const IngredientDetails: FC = () => {
  const id = useParams().id;

  const ingredients = useSelector((state) => state.ingredients.ingredients);
  const ingredientData = ingredients.find(
>>>>>>> 938b4d3323a03e095b1fb5951ec7a7434af8824a
    (ingredient) => ingredient._id === id
  );

  if (!ingredientData) {
    return <Preloader />;
  }

  return <IngredientDetailsUI ingredientData={ingredientData} />;
};
