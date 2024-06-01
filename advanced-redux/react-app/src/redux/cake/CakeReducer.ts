import { BUY_CAKE } from "./CakeType";

const initialState = {
  numOfCakes: 10,
};

const cakeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

export { cakeReducer };
