import { useActions } from '@stackflow/react';

import type { TypeActivities } from '@stackflow-config';

export default function useFlow() {
  return useActions<TypeActivities>();
}
