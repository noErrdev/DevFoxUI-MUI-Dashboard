import { configureStore } from '@reduxjs/toolkit'
import { navigationReducer } from './sidebar/navigationSlice';
import { calendarReducer } from './calendar/calendarSlice';

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    calendar: calendarReducer,
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch