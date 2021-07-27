import axios from "axios";
import {getCategoryApiUrl} from './ApiConstants';

export const getAppCategories = async () => {
  const response = await axios.get(getCategoryApiUrl);
  return response.data;
};
