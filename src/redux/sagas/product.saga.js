/** @format */

import { put, takeEvery } from '@redux-saga/core/effects';
import axios from 'axios';

import {
	GET_PRODUCT_HOME,
	GET_PRODUCT_HOME_FAIL,
	GET_PRODUCT_HOME_SUCCESS,
	GET_PRODUCTS,
	GET_PRODUCTS_SUCCESS,
	GET_PRODUCTS_FAIL,
	GET_TOTAL_PRODUCTS,
	GET_TOTAL_PRODUCTS_SUCCESS,
	GET_TOTAL_PRODUCTS_FAIL,
	CREATE_PRODUCTS_SUCCESS,
	CREATE_PRODUCTS_FAIL,
	CREATE_PRODUCTS,
	UPDATE_PRODUCTS,
	UPDATE_PRODUCTS_FAIL,
	UPDATE_PRODUCTS_SUCCESS,
	DELETE_PRODUCTS,
	DELETE_PRODUCTS_FAIL,
	DELETE_PRODUCTS_SUCCESS,
} from '../constants';

const apiURL = 'http://localhost:4000';

function* getProductHomeSaga(action) {
    try {
        const responseNew = yield axios({
            method: 'GET',
            url: `${apiURL}/products?new=true`,
        });
        const responseSale = yield axios({
            method: 'GET',
            url: `${apiURL}/products?oldPrice_gte=1`,
        });
        const responseSpecial = yield axios({
            method: 'GET',
            url: `${apiURL}/products?rate_gte=4`,
        });
        const data = {
            new: responseNew.data,
            sale: responseSale.data,
            special: responseSpecial.data,
        };

        yield put({
            type: GET_PRODUCT_HOME_SUCCESS,
            payload: data,
        });
    } catch (error) {
        yield put({
            type: GET_PRODUCT_HOME_FAIL,
            payload: error,
        });
    }
}

function* getProductSaga(action) {
	try {
		const { page, limit, category, price, tag, sort, name } = action.payload;
		const response = yield axios({
			method: 'GET',
			url: `${apiURL}/products`,
			params: {
				...(page && { _page: page }),
				...(limit && { _limit: limit }),
				...(category && { categoryId: category }),
				...(price && { newPrice_gte: price[0], newPrice_lte: price[1] }),
				...(tag && { tagId: tag }),
				...(sort === 'bestSelling' && { oldPrice_gte: 0 }),
				...(sort === 'priceLowToHigh' && { _sort: 'newPrice', _order: 'asc' }),
				...(sort === 'priceHighToLow' && { _sort: 'newPrice', _order: 'desc' }),
				...(sort === 'date' && { news: true }),
				...(name && { name_like: name }),
			},
		});
		const data = response.data;
		const header = response.headers['x-total-count'];
		console.log(header);

		yield put({
			type: GET_PRODUCTS_SUCCESS,
			payload: { product: data, params: action.payload, total: header },
		});
	} catch (error) {
		yield put({
			type: GET_PRODUCTS_FAIL,
			payload: error,
		});
	}
}

function* getTotalProductSaga(action) {
    try {
        const { category, price, tag, sort, name } = action.payload;

        const response = yield axios({
            method: 'GET',
            url: `${apiURL}/products`,
            params: {
                ...(category && { categoryId: category }),
                ...(price && { newPrice_gte: price[0], newPrice_lte: price[1] }),
                ...(tag && { tagId: tag }),
                ...(sort === 'bestSelling' && { oldPrice_gte: 0 }),
                ...(sort === 'priceLowToHigh' && { _sort: 'newPrice', _order: 'asc' }),
                ...(sort === 'priceHighToLow' && { _sort: 'newPrice', _order: 'desc' }),
                ...(sort === 'date' && { news: true }),
                ...(name && { name_like: name }),
            },
        });
        const data = response.data;
        yield put({
            type: GET_TOTAL_PRODUCTS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        yield put({
            type: GET_TOTAL_PRODUCTS_FAIL,
            payload: error,
        });
    }
}

function* createProductSaga(action) {
    try {
        const response = yield axios.post(`${apiURL}/products`, { ...action.payload, img: [action.payload.img] });
        const data = response.data;
        yield put({
            type: CREATE_PRODUCTS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        yield put({
            type: CREATE_PRODUCTS_FAIL,
            payload: error,
        });
    }
}
function* updateProductSaga(action) {
    try {
        const { id, ...other } = action.payload;
        const response = yield axios.patch(`${apiURL}/products/${id}`, { ...other, img: [action.payload.img] });
        const data = response.data;
        yield put({
            type: UPDATE_PRODUCTS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        yield put({
            type: UPDATE_PRODUCTS_FAIL,
            payload: error,
        });
    }
}
function* deleteProductSaga(action) {
    try {
        const { id } = action.payload;

        const response = yield axios.delete(`${apiURL}/products/${id}`);

        const data = response.data;
        yield put({
            type: DELETE_PRODUCTS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        yield put({
            type: DELETE_PRODUCTS_FAIL,
            payload: error,
        });
    }
}

export default function* productSaga() {
    yield takeEvery(GET_PRODUCT_HOME, getProductHomeSaga);
    yield takeEvery(GET_PRODUCTS, getProductSaga);
    yield takeEvery(GET_TOTAL_PRODUCTS, getTotalProductSaga);
    yield takeEvery(CREATE_PRODUCTS, createProductSaga);
    yield takeEvery(UPDATE_PRODUCTS, updateProductSaga);
    yield takeEvery(DELETE_PRODUCTS, deleteProductSaga);
}
