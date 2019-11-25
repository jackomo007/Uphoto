import { takeEvery, call } from 'redux-saga/effects';
import { auth, dB } from '../Services/Firebase';
import CONTANTS from '../Constants';

const registerInFire = values => auth
.createUserWithEmailAndPassword(values.email, values.password)
.then(success => success);

const registerInDB = ({uid, email, name, password}) =>
dB.ref('users/' + uid).set({
    name,
    email,
    password,
});

function* sagaRegister(values){
    try {
        const register = yield call(registerInFire, values.datos);
        const uid =  register.user.uid;
        const email =  register.user.email;
        const password =  register.user.password;
        const name = values.datos.name;
        yield call(registerInDB, { uid, email, name, password});
    } catch (error) {
        console.log('Ops! '+error);
    }
}

const loginInFire = ({email, password}) => auth
.signInWithEmailAndPassword(email,password)
.then((success)=>success);

function* sagaLogin(values){
    try {
       const result = yield call(loginInFire, values.datos);
       console.log(result);
    } catch (error) {
        console.log('Ops! '+error);
    }
}

export default function* functionPrimary(){
    yield takeEvery(CONTANTS.REGISTER, sagaRegister);
    yield takeEvery(CONTANTS.LOGIN, sagaLogin);
}