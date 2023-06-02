import { slice } from "lodash";
import {axios} from './axios'

export function getProducts() {
    return async (dispatch) => {
      dispatch(slice.actions.startLoading());
      try {
        const response = await axios.get('../Api/Product');
        dispatch(slice.actions.getProductsSuccess(response.data.products));
      } catch (error) {
        dispatch(slice.actions.hasError(error));
      }
    };
  }