import { applyMiddleware, createStore, Store } from "@reduxjs/toolkit"
import * as React from "react"
import rootReducer from "./rootReducer"
import thunk from "redux-thunk"

const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootStore = ReturnType<typeof rootReducer>
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store