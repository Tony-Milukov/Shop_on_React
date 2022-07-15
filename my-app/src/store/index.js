import thunk from 'redux-thunk' ;
import { createStore,compose,combineReducers,applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage
import {productsReducer} from "./products/reducer"
import {searchReducer} from "./search/reducer"
import {cartReducer} from "./cart/reducer"
import {userReducer} from "./user/reducer"
import { linksReducer } from "./links/reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
}
const rootReducer = combineReducers({
    products: productsReducer,
    search: searchReducer,
    cartProducts: cartReducer,
    user: userReducer,
    links: linksReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
// created store
export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);
// create persistor
export const persistor = persistStore(store);
export default store
