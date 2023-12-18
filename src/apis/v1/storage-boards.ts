import Axios from '@libraries/axios';
import {
  FetchStorageBoardsParams,
  FetchStorageBoardsResponse,
  PutStorageBoardData
} from '@schemas/v1/storage-boards/request';
import { StorageBoard } from '@schemas/v1/storage-boards/response';

const BASE_PATH = '/storages';

export async function fetchPopularStorageBoards(params?: FetchStorageBoardsParams) {
  const { data } = await Axios.get<FetchStorageBoardsResponse>(`${BASE_PATH}/boards/popular`, {
    params
  });

  return data;
}

export async function fetchWorstStorageBoards(params?: FetchStorageBoardsParams) {
  const { data } = await Axios.get<FetchStorageBoardsResponse>(`${BASE_PATH}/boards/worst`, {
    params
  });

  return data;
}

export async function fetchLatestStorageBoards() {
  const { data } = await Axios.get<FetchStorageBoardsResponse>(`${BASE_PATH}/boards/latest`);

  return data;
}

export async function fetchStorageBoards({ path, ...params }: FetchStorageBoardsParams) {
  const { data } = await Axios.get<FetchStorageBoardsResponse>(`${BASE_PATH}/${path}/boards`, {
    params
  });

  return data;
}

export async function fetchStorageBoard(pathOrStorageId: number | string, id: number) {
  const { data } = await Axios.get<StorageBoard>(`${BASE_PATH}/${pathOrStorageId}/boards/${id}`);

  return data;
}

export async function putStorageBoardViewCount(storageId: number | string, id: number) {
  const { data } = await Axios.put<StorageBoard, null>(
    `${BASE_PATH}/${storageId}/boards/${id}/view-count`
  );

  return data;
}

export async function putNonMemberStorageBoardRecommend(
  storageId: number | string,
  id: number,
  type: 0 | 1
) {
  const { data } = await Axios.put<
    StorageBoard,
    {
      type: 0 | 1;
    }
  >(`${BASE_PATH}/${storageId}/boards/non-members/${id}/recommend`, {
    type
  });

  return data;
}

export async function postNonMemberStorageBoardDraft(storageId: number) {
  const { data } = await Axios.post<StorageBoard, null>(
    `${BASE_PATH}/${storageId}/boards/non-members/drafts`
  );

  return data;
}

export async function putNonMemberStorageBoard(
  storageId: number,
  id: number,
  data: PutStorageBoardData
) {
  const { data: response } = await Axios.put<StorageBoard, PutStorageBoardData>(
    `${BASE_PATH}/${storageId}/boards/non-members/${id}`,
    data
  );

  return response;
}

export async function postNonMemberStorageBoardImage(storageId: number, id: number, file: File) {
  const formData = new FormData();
  formData.append('image', file);

  const { data } = await Axios.post<{ imageUrl: string }, FormData>(
    `${BASE_PATH}/${storageId}/boards/non-members/${id}/images`,
    formData
  );

  return data;
}

export async function patchNonMemberStorageBoard(
  storageId: number,
  id: number,
  password: string | number
) {
  const { data: response } = await Axios.patch<StorageBoard, { password: string | number }>(
    `${BASE_PATH}/${storageId}/boards/non-members/${id}/edit`,
    {
      password
    }
  );

  return response;
}

export async function deleteNonMemberStorageBoard(
  storageId: number,
  id: number,
  password: string | number
) {
  const { data: response } = await Axios.delete<StorageBoard>(
    `${BASE_PATH}/${storageId}/boards/non-members/${id}`,
    {
      data: {
        password
      }
    }
  );

  return response;
}
