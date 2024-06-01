import redux, { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger";
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
const MAKE_CAKE = "MAKE_CAKE";

function buyCake() {
  return {
    // action
    type: BUY_CAKE,
    info: "first redux action",
  };
}
function makeCake() {
  return {
    // action
    type: MAKE_CAKE,
    info: "second redux action",
  };
}
function buyIcecream() {
  return {
    // action
    type: BUY_ICECREAM,
    info: "third redux action",
  };
}
const logger = createLogger();

const initialCakeState = {
  numOfCakes: 10,
};
const initialIcecreamState = {
  numOfIcecreams: 15,
};

const cakeReducer = (
  state = initialCakeState,
  action: { type: string; info: string }
) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case MAKE_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + 1,
      };
    default:
      return state;
  }
};
const icecreamReducer = (
  state = initialIcecreamState,
  action: { type: string; info: string }
) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

console.log("initial State: ", store.getState());

const unsubscribe = store.subscribe(() => {}
//   console.log("Updated state:", store.getState())
);

// store.dispatch(buyCake());
// store.dispatch(buyIcecream());
// store.dispatch(makeCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
// store.dispatch(makeCake());
store.dispatch(buyCake());

unsubscribe();
