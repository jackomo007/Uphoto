import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as form} from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import functionPrimary from './Sagas/Sagas';
import CONSTANTS from './Constants';

const reducerPrueba = (state=[0], action) => {
    switch (action.type) {
        case 'AUMENTAR_REDUCER_PRUEBA':
            return [...state, 1];
    
        default:
            return state;
    }
};

const reducerSession = (state=null, action) => {
    switch (action.type) {
        case CONSTANTS.SESSION:
            return action.user;
        case CONSTANTS.LOGOUT:
            return null;
        default:
            return state;
    }
};

const reducerImageSingUp = (state= {image: null}, action) => {
    switch (action.type) {
        case CONSTANTS.LOAD_IMG_SINGUP:
            return {image: action.image};
        case CONSTANTS.CLEAN_IMG_SINGUP:
            return {image: null};
        default:
            return state;
    }
};

const reducerImagePublication = (state= {image: null}, action) => {
    switch (action.type) {
        case CONSTANTS.LOAD_IMG_PUBLICATION:
            return {image: action.image};
        case CONSTANTS.CLEAN_IMG_PUBLICATION:
            return {image: null};
        default:
            return state;
    }
};

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
    reducerImageSingUp,
    reducerSession,
    reducerPrueba,
    reducerImagePublication,
    form,
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(functionPrimary);

export default store;