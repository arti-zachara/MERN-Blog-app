import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// import reducers
import posts from "./PostsRedux";

// combine reducers
const rootReducer = combineReducers({
  posts
});

// create store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
