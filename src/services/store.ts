<<<<<<< HEAD
// src\services\store.ts

=======
>>>>>>> 938b4d3323a03e095b1fb5951ec7a7434af8824a
import { configureStore } from '@reduxjs/toolkit';

import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';
<<<<<<< HEAD
import { rootReducer } from './reducers';
=======

import { rootReducer } from './rootReducer';
>>>>>>> 938b4d3323a03e095b1fb5951ec7a7434af8824a

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

// export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useDispatch: () => AppDispatch = dispatchHook;

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
