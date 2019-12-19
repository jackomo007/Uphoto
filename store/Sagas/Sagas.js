import { takeEvery, call, select, put, all } from 'redux-saga/effects';
import { auth, dB } from '../Services/Firebase';
import CONTANTS from '../Constants';
import { actionAddPublicationStore, actionAddAuthorsStore, actionAddUserStore, actionSuccessPublicationUploaded, actionErrorPublicationUploaded } from '../Actions';

const registerInFire = values => auth
.createUserWithEmailAndPassword(values.email, values.password)
.then(success => success);

const registerInDB = ({
    uid, email, name, password, photoURL,
}) =>
    dB.ref('users/'+ uid).set({
        name,
        email,
        password,
        photoURL,
});

const registerPictureCloudinary = ({image}) => {
    const {uri} = image;
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

function* sagaRegister(values){
    try {
        const image = yield select(state => state.reducerImageSingUp);
        const urlPicture = yield call(registerPictureCloudinary, image);
        const photoURL = urlPicture.secure_url;

        const register = yield call(registerInFire, values.datos);
        const uid =  register.user.uid;
        const email =  values.datos.email;
        const password =  values.datos.password;
        const name = values.datos.name;
        yield call(registerInDB, { uid, email, name, password, photoURL});
    } catch (error) {
        console.log('Ops! '+error);
    }
}

const loginInFire = ({email, password}) => auth
.signInWithEmailAndPassword(email,password)
.then(success => success);

function* sagaLogin(values){
    try {
       const result = yield call(loginInFire, values.datos);
    } catch (error) {
        console.log('Ops! '+error);
    }
}

const writeFire = ({width, height, secure_url, uid}, text = "") => dB
.ref('publications/')
.push({
    width,
    height,
    secure_url,
    uid,
    text,
})
.then(response => response);

const makeAuthorPublications = ({ uid, key}) => dB
.ref('author-publications/'+uid)
.update({[key]: true})
.then(response => response);

function* sagaUploadPublication({values}) {
    try {
        // throw new Error('Opss... Houston we have a problem');
        const image = yield select(state => state.reducerImagePublication);
        const user = yield select(state => state.reducerSession);
        const {uid} = user;
        const resultPhoto = yield call(registerPictureCloudinary, image);
        const{width, height, secure_url} = resultPhoto;
        const paramsPhoto = {width, height, secure_url,uid};
        const saveInFire = yield call(writeFire, paramsPhoto, values.text);
        const {key} = saveInFire;
        const paramsAuthorPublications = { uid, key};
        const resultmakeAuthorPublications = yield call(makeAuthorPublications, paramsAuthorPublications,);
        yield put(actionSuccessPublicationUploaded());
    } catch (error) {
        console.log(error);
        yield put(actionErrorPublicationUploaded());
    }
}

const downloadPublication = () => dB
.ref('publications/')
.once('value')
.then((snapshot)=> {
    let publications = [];
        snapshot.forEach((childSnapshot) => {
            const {key} = childSnapshot;
            const publication = childSnapshot.val();
            publication.key = key;
            publications.push(publication);
        });
        return publications;
    }
);

const downloadAuthor = uid => dB
.ref('users/'+uid)
.once('value')
.then((snapshot) => snapshot.val());

function* sagaDownloadPublication() {
    try {
        const publications = yield call(downloadPublication);
        authors= yield all(publications.map(publication => call(downloadAuthor, publication.uid)));
        user = yield select(state => state.reducerSession);
        yield put(actionAddUserStore(user));
        yield put(actionAddAuthorsStore(authors));
        yield put(actionAddPublicationStore(publications));
    } catch (error) {
        console.log(error);
    }
}

export default function* functionPrimary(){
    yield takeEvery(CONTANTS.REGISTER, sagaRegister);
    yield takeEvery(CONTANTS.LOGIN, sagaLogin);
    yield takeEvery(CONTANTS.UPLOAD_PUBLICATION, sagaUploadPublication);
    yield takeEvery(CONTANTS.DOWNLOAD_PUBLICATION, sagaDownloadPublication);
}