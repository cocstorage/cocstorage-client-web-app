import { AxiosRequestConfig } from 'axios';

import Axios from '@libraries/axios';
import { StorageCategories } from '@schemas/v1/storage-categories/response';

const BASE_PATH = '/storage-categories';

export async function fetchStorageCategories(config?: AxiosRequestConfig) {
  const { data } = await Axios.get<{ categories: StorageCategories[] }>(BASE_PATH, config);

  return data;
}
