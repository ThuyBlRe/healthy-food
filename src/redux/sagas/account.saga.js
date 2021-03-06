/** @format */

import { put, takeEvery, takeLeading } from 'redux-saga/effects';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import {
	CHANGE_ROLE,
	DELETE_USER,
	DELETE_USER_SUCCESS,
	GET_INFO,
	GET_INFO_FAIL,
	GET_INFO_SUCCESS,
	GET_USER_ACCOUNT,
	GET_USER_ACCOUNT_SUCCESS,
} from '../constants';

const apiURL = 'http://localhost:4000';

function* getInfoSaga(action) {
	try {
		const { id } = action.payload;
		const response = yield axios.get(`${apiURL}/users/${id}`);
		const data = response.data;
		yield put({
			type: GET_INFO_SUCCESS,
			payload: data,
		});
	} catch (error) {
		yield put({
			type: GET_INFO_FAIL,
			payload: error,
		});
	}
}

function* getAllAccount(action) {
	try {
		const { data } = yield axios.get(`${apiURL}/users/`);

		yield put({
			type: GET_USER_ACCOUNT_SUCCESS,
			payload: data,
		});
	} catch (error) {
		console.log(error);
	}
}
function* deleteUser(action) {
	try {
		const { id } = action.payload;
		const res = yield axios.delete(`${apiURL}/users/${id}`);
		console.log(res.data);
		yield put({
			type: DELETE_USER_SUCCESS,
			payload: id,
		});
	} catch (error) {
		console.log(error);
	}
}
function* changeRole(action) {
	try {
		const { id, role } = action.payload;
		yield axios.patch(`${apiURL}/users/${id}`, { role });
	} catch (error) {
		console.log(error);
	}
}
export default function* accountSaga() {
	yield takeEvery(GET_INFO, getInfoSaga);
	yield takeEvery(GET_USER_ACCOUNT, getAllAccount);
	yield takeLeading(DELETE_USER, deleteUser);
	yield takeLeading(CHANGE_ROLE, changeRole);
}
