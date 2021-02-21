import { takeLatest , delay, put, takeEvery, call, select } from 'redux-saga/effects'
import { CLEAR, ADD, UPDATE_CURRENT_ITEM } from './actions';

function kiran(state, n) {
    console.log(state, n);
}
export function* addSaga() {
    yield takeLatest('DELAY_ADD', function* (addAction) {
         yield delay(2000);
         const list = yield select();
         yield call(kiran, list, 1);
         yield put({...addAction, type: 'ADD' })
    });
}