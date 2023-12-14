import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import { historySyncPlugin } from '@stackflow/plugin-history-sync';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { stackflow } from '@stackflow/react';

import HomeActivity from '@activities/HomeActivity';

export const { Stack, activities } = stackflow({
  transitionDuration: 350,
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: 'cupertino'
    }),
    historySyncPlugin({
      routes: {
        HomeActivity: '/'
      },
      fallbackActivity: () => 'HomeActivity'
    })
  ],
  activities: {
    HomeActivity
  },
  initialActivity: () => 'HomeActivity'
});

export type TypeActivities = typeof activities;
