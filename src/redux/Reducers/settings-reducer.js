const INITIALIZED_SUCCESS = 'app/SET-INITIALIZED';

let initialState = {};

const appReducer = (state = initialState, action) => {

  switch (action.type) {

    case INITIALIZED_SUCCESS:
      return {...state}

    default:
      return state
  }

};

const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});


export default appReducer