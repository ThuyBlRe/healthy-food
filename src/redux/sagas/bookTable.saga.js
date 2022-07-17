/** @format */

import { put, takeEvery, takeLeading } from 'redux-saga/effects';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import {
	CREATE_BOOK_TABLE,
	CREATE_BOOK_TABLE_FAIL,
	GET_USER_BOOK_TABLE_SUCCESS,
	DELETE_USER_BOOK_TABLE_SUCCESS
} from '../constants';

const apiURL = 'http://localhost:4000';

function* createBookTable(action) {
    try {
        const response = yield axios.post(`${apiURL}/tables`, action.payload);
        const data = response.data;
        yield put({
            type: CREATE_BOOK_TABLE,
            payload: data,
        });
    } catch (error) {
        yield put({
            type: CREATE_BOOK_TABLE_FAIL,
        });
    }
}

function* getAllBookTable(action) {
	try {
		const { data } = yield axios.get(`${apiURL}/tables/`);

		yield put({
			type: GET_USER_BOOK_TABLE_SUCCESS,
			payload: data,
		});
	} catch (error) {
		console.log(error);
	}
}
function* deleteBookTable(action) {
	try {
		const { id } = action.payload;
		const res = yield axios.delete(`${apiURL}/tables/${id}`);
		console.log(res.data);
		yield put({
			type: DELETE_USER_BOOK_TABLE_SUCCESS,
			payload: id,
		});
	} catch (error) {
		console.log(error);
	}
}

export default function* bookTableSaga() {
	yield takeEvery(CREATE_BOOK_TABLE, createBookTable);
	yield takeEvery(GET_USER_BOOK_TABLE_SUCCESS, getAllBookTable);
	yield takeLeading(DELETE_USER_BOOK_TABLE_SUCCESS, deleteBookTable);
}
