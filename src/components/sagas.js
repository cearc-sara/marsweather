import { takeLatest, put, call } from "redux-saga/effects";
import { loadTempsSuccess, loadTempsFail } from "../actions/action";
import { loadTempsApi } from "./api";

export function* onLoadTempsAsync() {
    try{
        const response = yield call(loadTempsApi);
        yield put(loadTempsSuccess(response.data));
        console.log(response.data)
    }catch (error) {
        yield put(loadTempsFail(error));
    }
}

export function* onLoadTemps() {
    yield takeLatest("LOAD_TEMPS", onLoadTempsAsync);
}