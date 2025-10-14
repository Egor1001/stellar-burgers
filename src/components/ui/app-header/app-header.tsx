import React, { FC } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import styles from './app-header.module.css';
import { TAppHeaderUIProps } from './type';
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon
} from '@zlden/react-developer-burger-ui-components';

export const AppHeaderUI: FC<TAppHeaderUIProps> = ({ userName }) => (
  <header className={styles.header}>
    <nav className={`${styles.menu} p-4`}>
      <div className={styles.menu_part_left}>
<<<<<<< HEAD
        <Link to={'/'} className={styles.link}>
          <BurgerIcon type={'primary'} />
          <p className='text text_type_main-default ml-2 mr-10'>Конструктор</p>
        </Link>
        <Link to={'/feed'} className={styles.link}>
          <ListIcon type={'primary'} />
          <p className='text text_type_main-default ml-2'>Лента заказов</p>
        </Link>
=======
        <>
          <NavLink to='/' className={({ isActive }) => isActive ? `${styles.link} ${styles.link_active}` : styles.link}>
            <BurgerIcon type={'primary'} />
            <p className='text text_type_main-default ml-2 mr-10'>
              Конструктор
            </p>
          </NavLink>
        </>
        <>
          <NavLink to='/feed' className={({ isActive }) => isActive ? `${styles.link} ${styles.link_active}` : styles.link}>
            <ListIcon type={'primary'} />
            <p className='text text_type_main-default ml-2'>Лента заказов</p>
          </NavLink>
        </>
>>>>>>> 938b4d3323a03e095b1fb5951ec7a7434af8824a
      </div>
      <div className={styles.logo}>
        <Link to={'/'} className={styles.link}>
          <Logo className='' />
        </Link>
      </div>
      <div className={styles.link_position_last}>
        <Link to={'/profile'} className={styles.link}>
          <ProfileIcon type={'primary'} />
          <p className='text text_type_main-default ml-2'>
            {userName || 'Личный кабинет'}
          </p>
        </Link>
      </div>
<<<<<<< HEAD
=======
      <div className={styles.link_position_last}>
        <NavLink to='/profile' className={({ isActive }) => isActive ? `${styles.link} ${styles.link_active}` : styles.link}>
          <ProfileIcon type={'primary'} />
          <p className='text text_type_main-default ml-2'>
            {userName || 'Личный кабинет'}
          </p>
        </NavLink>
      </div>
>>>>>>> 938b4d3323a03e095b1fb5951ec7a7434af8824a
    </nav>
  </header>
);
