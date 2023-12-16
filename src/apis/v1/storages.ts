import Axios from '@libraries/axios';
import { FetchStoragesResponse } from '@schemas/v1/storages/request';
import { Storage } from '@schemas/v1/storages/response';

const BASE_PATH = '/storages';

export async function fetchStorages() {
  const { data } = await Axios.get<FetchStoragesResponse>(BASE_PATH, {
    params: {
      page: 1,
      per: 180,
      type: 'normal'
    }
  });

  return data;
}

export async function fetchStorage(id: number | string) {
  const { data } = await Axios.get<Storage>(`${BASE_PATH}/${id}`);

  return data;
}
