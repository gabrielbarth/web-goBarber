import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'gobarber', // app name on persist
      storage,
      whitelist: ['auth', 'user'], // storaged reducers
    },
    reducers
  );
  return persistedReducer;
};
