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

export const actionUploadComment = values => ({
    type: CONSTANTS.UPLOAD_COMMENT,
    values,
});

export const actionLikePublication = values => ({
    type: CONSTANTS.PUBLICATION_LIKED,
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

export const actionAddAllAuthorsStore = () => ({
    type: CONSTANTS.ADD_ALL_AUTHORS_STORE,
});

export const actionAddAuthorCommentsStore = author_comments => ({
    type: CONSTANTS.ADD_ALL_AUTHORS_STORE,
});

export const actionAddUserStore = user => ({
    type: CONSTANTS.ADD_USER_STORE,
    user
});

export const actionAddCommentsStore = comments => ({
    type: CONSTANTS.ADD_COMMENT_STORE,
    comments
});

export const actionAddLikesStore = likes => ({
    type: CONSTANTS.ADD_LIKE_STORE,
    likes
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

export const actionCleanCommentUploaded = () => ({
    type: CONSTANTS.CLEAN_COMMENT_UPLOADED,
});

export const actionSuccessCommentUploaded = () => ({
    type: CONSTANTS.SUCCESS_COMMENT_UPLOADED,
});

export const actionErrorCommentUploaded = () => ({
    type: CONSTANTS.ERROR_COMMENT_UPLOADED,
});

export const actionCleanLikePublication = () => ({
    type: CONSTANTS.CLEAN_PUBLICATION_LIKED,
});

export const actionSuccessLikePublication = () => ({
    type: CONSTANTS.SUCCESS_PUBLICATION_LIKED,
});

export const actionErrorLikePublication = () => ({
    type: CONSTANTS.ERROR_PUBLICATION_LIKED,
});