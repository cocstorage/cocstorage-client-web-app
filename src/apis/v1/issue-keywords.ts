import Axios from '@libraries/axios';
import { IssueKeywordRank } from '@schemas/v1/issue-keywords/response';

const BASE_PATH = '/issue-keywords';

export async function fetchIssueKeywordRank() {
  const { data } = await Axios.get<IssueKeywordRank>(`${BASE_PATH}/rank`);

  return data;
}
