import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './modules';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: import.meta.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export default store;
