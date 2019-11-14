import { takeEvery, call } from 'redux-saga/effects';
import { auth, dB } from '../Services/Firebase';

const registerInFirebase = values => auth
.createUserWithEmailAndPassword(values.email, values.password)
.then(success => success);

function* generatorRegister(values){
    try {
        const register = yield call(registerInFirebase, values.datos);
        const uid =  register.user.uid;
        const email =  register.user.email;
        const name = values.datos.name;
        dB.ref('users/' + uid).set({
            name,
            email,
        });
    } catch (error) {
        console.log('Ops! '+error);
    }
}

export default function* functionPrimary(){
    yield takeEvery('REGISTER', generatorRegister);
}