import { User } from '@schemas/v1/users/response';

export interface Notice {
  id: number;
  user: User;
  subject: string;
  content: string;
  description: string;
  viewCount: number;
  isDraft: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  thumbnailUrl: string | null;
  commentTotalCount: number;
  commentLatestPage: number;
}
