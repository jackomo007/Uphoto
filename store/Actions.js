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

export const actionAddAuthorsStore = authors => ({
    type: CONSTANTS.ADD_AUTHOR_STORE,
    authors
});

export const actionAddUserStore = user => ({
    type: CONSTANTS.ADD_USER_STORE,
    user
});

export const actionSuccessPublicationUploaded = () => ({
    type: CONSTANTS.SUCCESS_PUBLICATION_UPLOADED,
});

export const actionErrorPublicationUploaded = () => ({
    type: CONSTANTS.ERROR_PUBLICATION_UPLOADED,
});

export const actionCleanPublicationUploaded = () => ({
    type: CONSTANTS.CLEAN_PUBLICATION_UPLOADED,
});