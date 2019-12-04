import CONSTANTS from './Constants';

export const actionRegister = values => ({
    type: CONSTANTS.REGISTER,
    datos: values,
});

export const actionLogin = datos => ({
    type: CONSTANTS.LOGIN,
    datos,
});

export const actionLogout = () => ({
    type: CONSTANTS.LOGOUT,
});

export const actionSession = user => ({
    type: CONSTANTS.SESSION,
    user,
});

export const actionLoadImageSignUp = image => ({
    type: CONSTANTS.LOAD_IMG_SINGUP,
    image,
});

export const actionCleanImageSignUp = () => ({
    type: CONSTANTS.CLEAN_IMG_SINGUP,
});

export const actionLoadImagePublication = image => ({
    type: CONSTANTS.LOAD_IMG_PUBLICATION,
    image,
});

export const actionCleanImagePublication = () => ({
    type: CONSTANTS.CLEAN_IMG_PUBLICATION,
});

export const actionUploadPublication = values => ({
    type: CONSTANTS.UPLOAD_PUBLICATION,
    values,
});

export const actionDownloadPublication = () => ({
    type: CONSTANTS.DOWNLOAD_PUBLICATION,
});

export const actionAddPublicationStore = publications => ({
    type: CONSTANTS.ADD_PUBLICATION_STORE,
    publications
});