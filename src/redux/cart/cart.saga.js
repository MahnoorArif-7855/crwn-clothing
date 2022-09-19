import { put,call,takeLatest,all } from '@redux-saga/core/effects';
import { clearCart } from './cart.action';
import userActionTypes from './../user/user.types';

export function* clearCartOnSignOut(){
    yield put(clearCart())
}

export function* onSignOutSuccess(){
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS,clearCartOnSignOut)
}

export function* cartSaga(){
    yield all([call(onSignOutSuccess)])
}