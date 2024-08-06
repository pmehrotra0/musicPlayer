import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './actions/playerSlice';
import { fetchSongList  } from '../api/songsAPI';

export const store = configureStore({
  reducer: {
    [fetchSongList.reducerPath]: fetchSongList.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleMare) => getDefaultMiddleMare().concat(fetchSongList.middleware)
});