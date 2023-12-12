import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { stackflow } from '@stackflow/react';

import HomeActivity from '@activities/HomeActivity';
import MyActivity from '@activities/MyActivity';

export const { Stack, activities } = stackflow({
  transitionDuration: 350,
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: 'cupertino'
    })
  ],
  activities: {
    HomeActivity,
    MyActivity
  },
  initialActivity: () => 'HomeActivity'
});

export type TypeActivities = typeof activities;
