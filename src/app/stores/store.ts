import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
   reducer: {},
});

export type TypeRootState = ReturnType<typeof store.getState>;
export type TypeDispatch = typeof store.dispatch;
export default store;
