export interface IssueKeyword {
  isUp: boolean;
  path: string;
  isNew: boolean;
  isDown: boolean;
  number: number;
  keyword: string;
  keywordId: number;
}

export interface IssueKeywordRank {
  id: number;
  date: string;
  ranks: IssueKeyword[];
}
