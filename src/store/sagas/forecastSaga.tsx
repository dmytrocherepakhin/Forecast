import {
  getForecastError,
  getForecastSuccess,
  IForecastSaga,
} from "../actions/actions";
import { FORECAST_SAGA } from "../actionTypes/types";
import { call, put, takeEvery } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { getForecast } from "../../assets/api";

export function* sagaForecastWatcher(): Generator {
  yield takeEvery(FORECAST_SAGA, sagaForecastWorker);
}

function* sagaForecastWorker({ payload }: IForecastSaga) {
  try {
    const response: AxiosResponse = yield call(getForecast, payload.cityName);
    yield put(getForecastSuccess(response.data));
  } catch (e) {
    yield put(getForecastError("Error of getting forecast"));
  }
}
