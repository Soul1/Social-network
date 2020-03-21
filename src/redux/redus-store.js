import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./Reducers/profile-reducer";
import dialogsReducer from "./Reducers/dialogs-reducer";
import navbarReducer from "./Reducers/navbar-reducer";
import usersReducer from "./Reducers/users-reducer";
import authReducer from "./Reducers/auth-reducer";
import appReducer from "./Reducers/app-reducer";
import settingsReducer from "./Reducers/settings-reducer";
import {reducer as fromReducer} from "redux-form";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  navbar: navbarReducer,
  usersPage: usersReducer,
  settingsPage: settingsReducer,
  auth: authReducer,
  app: appReducer,
  form: fromReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store