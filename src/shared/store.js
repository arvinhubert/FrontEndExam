import {
	applyMiddleware,
	createStore,
	combineReducers,
	compose } from 'redux';
import thunk from 'redux-thunk';

import homeReducer from '../Home/homeReducer';
import productMngmtReducer from '../ProductManagement/productMngmtReducer';

const store = createStore(
		combineReducers({
			homeReducer,
            productMngmtReducer
		}),
		compose(applyMiddleware(thunk))
	)
export default store;