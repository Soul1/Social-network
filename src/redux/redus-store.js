import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./Reducers/profile-reducer";
import dialogsReducer from "./Reducers/dialogs-reducer";
import navbarReducer from "./Reducers/navbar-reducer";
import usersReducer from "./Reducers/users-reducer";
import authReducer from "./Reducers/auth-reducer";
import appReducer from "./Reducers/app-reducer";
import {reducer as fromReducer} from "redux-form";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  navbar: navbarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
  form: fromReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store

export default store