import {auth} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'app/SET-INITIALIZED';

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {

  switch (action.type) {

    case INITIALIZED_SUCCESS:
      return {...state, initialized: true}

    default:
      return state
  }

};

const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => async (dispatch) => {
  let dispatchResult = dispatch(auth())
  await Promise.all([dispatchResult])
  dispatch(initializedSuccess())

};


export default appReducer