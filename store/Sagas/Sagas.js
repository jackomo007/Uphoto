import { takeEvery, call, select, put, all } from 'redux-saga/effects';
import { auth, dB } from '../Services/Firebase';
import CONTANTS from '../Constants';
import { actionAddLikesStore, actionSuccessLikePublication, actionErrorLikePublication, actionSuccessCommentUploaded, actionErrorCommentUploaded, actionAddPublicationStore, actionAddAuthorCommentsStore, actionAddCommentsStore, actionAddAuthorsStore, actionAddUserStore, actionSuccessPublicationUploaded, actionErrorPublicationUploaded } from '../Actions';

const registerInFire = values => auth
    .createUserWithEmailAndPassword(values.email, values.password)
    .then(success => success);

const registerInDB = ({
    uid, email, name, password, photoURL,
}) => dB
    .ref('users/' + uid)
    .set({
        name,
        email,
        password,
        photoURL,
    });

const registerPictureCloudinary = ({ image }) => {
    const { uri } = image;
    const splitName = uri.split('/');
    const name = [...splitName].pop();

    const photo = {
        uri,
        type: 'image/jpeg',
        name,
    };

    const formPicture = new FormData();
    formPicture.append('upload_preset', CONTANTS.CLOUDINARY_PRESET);
    formPicture.append('file', photo);

    return fetch(CONTANTS.CLOUDINARY_NAME, {
        method: 'POST',
        body: formPicture,
    })
        .then(response => response.json());
};

function* sagaRegister(values) {
    try {
        const image = yield select(state => state.reducerImageSingUp);
        const urlPicture = yield call(registerPictureCloudinary, image);
        const photoURL = urlPicture.secure_url;

        const register = yield call(registerInFire, values.datos);
        const uid = register.user.uid;
        const email = values.datos.email;
        const password = values.datos.password;
        const name = values.datos.name;
        yield call(registerInDB, { uid, email, name, password, photoURL });
    } catch (error) {
        console.log('Ops! ' + error);
    }
}

const loginInFire = ({ email, password }) => auth
    .signInWithEmailAndPassword(email, password)
    .then(success => success);

function* sagaLogin(values) {
    try {
        const result = yield call(loginInFire, values.datos);
    } catch (error) {
        console.log('Ops! ' + error);
    }
}

const writeFire = ({ width, height, secure_url, uid }, text = "") => dB
    .ref('publications/')
    .push({
        width,
        height,
        secure_url,
        uid,
        text,
    })
    .then(response => response);

const makeAuthorPublications = ({ uid, key }) => dB
    .ref('author-publications/' + uid)
    .push({ [key]: true })
    .then(response => response);

const writeComment = (uid, key, text) => dB
    .ref('publication-comments/' + uid)
    .update({ [key]: text })
    .then(response => response);

const authorLike = (uid, key) =>
    dB
        .ref('author-like-publications/' + uid)
        .update({ [key]: true })
        .then(response => response);

function* sagaUploadPublication({ values }) {
    try {
        // throw new Error('Opss... Houston we have a problem');
        const image = yield select(state => state.reducerImagePublication);
        const user = yield select(state => state.reducerSession);
        const { uid } = user;
        const resultPhoto = yield call(registerPictureCloudinary, image);
        const { width, height, secure_url } = resultPhoto;
        const paramsPhoto = { width, height, secure_url, uid };
        const saveInFire = yield call(writeFire, paramsPhoto, values.text);
        const { key } = saveInFire;
        const paramsAuthorPublications = { uid, key };
        const resultmakeAuthorPublications = yield call(makeAuthorPublications, paramsAuthorPublications);
        yield put(actionSuccessPublicationUploaded());
    } catch (error) {
        console.log(error);
        yield put(actionErrorPublicationUploaded());
    }
}

function* sagaLikePublication({ values }) {
    try {
        // throw new Error('Opss... Houston we have a problem');
        const user = yield select(state => state.reducerSession);
        const { uid } = user;
        const publication_id = values;
        const makeLike = yield call(authorLike, uid, publication_id);
        yield put(actionSuccessLikePublication());
    } catch (error) {
        console.log(error);
        yield put(actionErrorLikePublication());
    }
}

function* sagaUploadComment({ values }) {
    try {
        // throw new Error('Opss... Houston we have a problem');
        const user = yield select(state => state.reducerSession);
        const { uid } = user;
        const { publication_id } = values.publication_id;
        const saveInFire = yield call(writeComment, publication_id, uid, values.text);
        yield put(actionSuccessCommentUploaded());
    } catch (error) {
        console.log(error);
        yield put(actionErrorCommentUploaded());
    }
}

const downloadPublication = () => dB
    .ref('publications/')
    .once('value')
    .then((snapshot) => {
        let publications = [];
        snapshot.forEach((childSnapshot) => {
            const { key } = childSnapshot;
            const publication = childSnapshot.val();
            publication.key = key;
            publications.push(publication);
        });
        return publications;
    }
    );

const downloadComments = key => dB
    .ref('publication-comments/' + key)
    .once('value')
    .then((snapshot) => {
        let comments = [];
        let publication_id = key;
        snapshot.forEach((childSnapshot) => {
            var comment = [];
            const { key } = childSnapshot;
            comment[0] = key;
            comment[1] = childSnapshot.val();
            comment[2] = publication_id;
            comments.push(comment);
        });
        return comments;
    });

const downloadLikesAuthor = user => dB
    .ref('author-like-publications/' + user.uid)
    .once('value')
    .then((snapshot) => {
        let likes = [];
        snapshot.forEach((element) => {
            const { key } = element;
            likes.push(key);
        });
        return likes;
    });

const downloadAuthor = uid => dB
    .ref('users/' + uid)
    .once('value')
    .then((snapshot) => {
        let authors = [];
        authors[0] = uid;
        authors[1] = snapshot.val();
        return authors;
    });

const downloadCommentsAuthor = () => dB
    .ref('users/')
    .once('value')
    .then((snapshot) => {
        let autores = [];
        snapshot.forEach((childSnapshot) => {
            let authors = [];
            const { key } = childSnapshot;
            authors[0] = key;
            authors[1] = childSnapshot.val();
            autores.push(authors);
        });
        return autores;
    }
    );

function* sagaDownloadPublication() {
    try {
        const publications = yield call(downloadPublication);
        commentarios = yield all(publications.map(publication => call(downloadComments, publication.key)));
        let comments = [];
        commentarios.forEach((element) => {
            if (Array.isArray(element) && element.length) {
                comments.push(element);
            }
        });

        author_comments = yield call(downloadCommentsAuthor);

        authors = yield all(publications.map(publication => call(downloadAuthor, publication.uid)));
        user = yield select(state => state.reducerSession);
        likes = yield call(downloadLikesAuthor, user);

        yield put(actionAddUserStore(user));
        yield put(actionAddAuthorsStore(authors));
        yield put(actionAddPublicationStore(publications));
        yield put(actionAddCommentsStore(comments));
        yield put(actionAddAuthorCommentsStore(author_comments));
        yield put(actionAddLikesStore(likes));
    } catch (error) {
        console.log(error);
    }
}

export default function* functionPrimary() {
    yield takeEvery(CONTANTS.REGISTER, sagaRegister);
    yield takeEvery(CONTANTS.LOGIN, sagaLogin);
    yield takeEvery(CONTANTS.UPLOAD_PUBLICATION, sagaUploadPublication);
    yield takeEvery(CONTANTS.DOWNLOAD_PUBLICATION, sagaDownloadPublication);
    yield takeEvery(CONTANTS.UPLOAD_COMMENT, sagaUploadComment);
    yield takeEvery(CONTANTS.PUBLICATION_LIKED, sagaLikePublication);
}