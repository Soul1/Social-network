import {auth} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'SET-INITIALIZED';

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

export const initializeApp = () => (dispatch) => {
  let dispatchResult = dispatch(auth())
  Promise.all([dispatchResult])
    .then(() => {
    dispatch(initializedSuccess())
  })
};


export default appReducer