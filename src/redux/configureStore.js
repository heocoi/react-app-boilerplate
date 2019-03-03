import {
  configureStore,
  getDefaultMiddleware,
  combineReducers
} from "redux-starter-kit";
import counterReducer from "./modules/counter";

export default function configureAppStore(preloadedState) {
  const rootReducer = combineReducers({
    counter: counterReducer
  });
  const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware()],
    preloadedState
  });

  return store;
}
