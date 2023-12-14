import { useActions } from '@stackflow/react';

import type { TypeActivities } from '../../stackflow';

export default function useFlow() {
  return useActions<TypeActivities>();
}
