<<<<<<< HEAD
import { useSelector } from '@store';

import styles from './constructor-page.module.css';

=======
import { useSelector } from '../../services/store';
import styles from './constructor-page.module.css';
>>>>>>> 938b4d3323a03e095b1fb5951ec7a7434af8824a
import { BurgerIngredients } from '../../components';
import { BurgerConstructor } from '../../components';
import { Preloader } from '../../components/ui';
import { FC } from 'react';
<<<<<<< HEAD
import { selectIngredientsLoading } from '../../services/ingredients/ingredients-slice';

export const ConstructorPage: FC = () => {
  /** взять переменную из стора */
  const isIngredientsLoading = useSelector(selectIngredientsLoading);
=======

export const ConstructorPage: FC = () => {
  const isIngredientsLoading = useSelector(
    (state) => state.ingredients.loading
  );
>>>>>>> 938b4d3323a03e095b1fb5951ec7a7434af8824a

  return (
    <>
      {isIngredientsLoading ? (
        <Preloader />
      ) : (
        <main className={styles.containerMain}>
          <h1
            className={`${styles.title} text text_type_main-large mt-10 mb-5 pl-5`}
          >
            Соберите бургер
          </h1>
          <div className={`${styles.main} pl-5 pr-5`}>
            <BurgerIngredients />
            <BurgerConstructor />
          </div>
        </main>
      )}
    </>
  );
};
