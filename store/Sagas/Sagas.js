import { takeEvery, call, select } from 'redux-saga/effects';
import { auth, dB } from '../Services/Firebase';
import CONTANTS from '../Constants';

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
        const email =  values.datos.name;
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

export default function* functionPrimary(){
    yield takeEvery(CONTANTS.REGISTER, sagaRegister);
    yield takeEvery(CONTANTS.LOGIN, sagaLogin);
}