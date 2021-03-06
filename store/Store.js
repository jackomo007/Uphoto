import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import functionPrimary from './Sagas/Sagas';
import CONSTANTS from './Constants';

const reducerPrueba = (state = [0], action) => {
    switch (action.type) {
        case 'AUMENTAR_REDUCER_PRUEBA':
            return [...state, 1];

        default:
            return state;
    }
};

const reducerSession = (state = null, action) => {
    switch (action.type) {
        case CONSTANTS.SESSION:
            return action.user;
        case CONSTANTS.LOGOUT:
            return null;
        default:
            return state;
    }
};

const reducerImageSingUp = (state = { image: null }, action) => {
    switch (action.type) {
        case CONSTANTS.LOAD_IMG_SINGUP:
            return { image: action.image };
        case CONSTANTS.CLEAN_IMG_SINGUP:
            return { image: null };
        default:
            return state;
    }
};

const reducerImagePublication = (state = { image: null }, action) => {
    switch (action.type) {
        case CONSTANTS.LOAD_IMG_PUBLICATION:
            return { image: action.image };
        case CONSTANTS.CLEAN_IMG_PUBLICATION:
            return { image: null };
        default:
            return state;
    }
};

const reducerPublicationsDownloaded = (state = [], action) => {
    switch (action.type) {
        case CONSTANTS.ADD_PUBLICATION_STORE:
            return [...state, ...action.publications];
        default:
            return state;
    }
};

const reducerAuthorsDownloaded = (state = [], action) => {
    switch (action.type) {
        case CONSTANTS.ADD_AUTHOR_STORE:
            return [...state, ...action.authors];
        default:
            return state;
    }
};

const reducerCommentsDownloaded = (state = [], action) => {
    switch (action.type) {
        case CONSTANTS.ADD_COMMENT_STORE:
            return [...state, ...action.comments];
        default:
            return state;
    }
};

const reducerAuthorsComments = (state = [], action) => {
    switch (action.type) {
        case CONSTANTS.ADD_ALL_AUTHORS_STORE:
            return [...state, author_comments];
        default:
            return state;
    }
};

const reducerLikes = (state = [], action) => {
    switch (action.type) {
        case CONSTANTS.ADD_LIKE_STORE:
            return [...state, likes];
        default:
            return state;
    }
};

const reducerPublicationUploaded = (state = { status: null }, action) => {
    switch (action.type) {
        case CONSTANTS.SUCCESS_PUBLICATION_UPLOADED:
            return { status: 'SUCCESS' };
        case CONSTANTS.ERROR_PUBLICATION_UPLOADED:
            return { status: 'ERROR' };
        case CONSTANTS.CLEAN_PUBLICATION_UPLOADED:
            return { status: null };
        default:
            return state;
    }
};

const reducerCommentUploaded = (state = { status: null }, action) => {
    switch (action.type) {
        case CONSTANTS.SUCCESS_COMMENT_UPLOADED:
            return { status: 'SUCCESS' };
        case CONSTANTS.ERROR_COMMENT_UPLOADED:
            return { status: 'ERROR' };
        case CONSTANTS.CLEAN_COMMENT_UPLOADED:
            return { status: null };
        default:
            return state;
    }
};

const reducerLikePublication = (state = { status: null }, action) => {
    switch (action.type) {
        case CONSTANTS.SUCCESS_PUBLICATION_LIKED:
            return { status: 'SUCCESS' };
        case CONSTANTS.ERROR_PUBLICATION_LIKED:
            return { status: 'ERROR' };
        case CONSTANTS.CLEAN_PUBLICATION_LIKED:
            return { status: null };
        default:
            return state;
    }
};

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
    reducerLikes,
    reducerLikePublication,
    reducerPublicationUploaded,
    reducerCommentUploaded,
    reducerAuthorsDownloaded,
    reducerCommentsDownloaded,
    reducerPublicationsDownloaded,
    reducerAuthorsComments,
    reducerImagePublication,
    reducerImageSingUp,
    reducerSession,
    reducerPrueba,
    form,
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(functionPrimary);

export default store;