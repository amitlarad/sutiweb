import axios from "axios";
import { getCategoryProductsApiUrl } from "./ApiConstants";

export const getAppCategoryProducts = async (params) => {
  const query = params.join("&");
  const response = await axios.get(`${getCategoryProductsApiUrl}?${query}`);
  return response.data;
};
