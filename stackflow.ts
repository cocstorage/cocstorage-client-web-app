import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import { historySyncPlugin } from '@stackflow/plugin-history-sync';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { stackflow } from '@stackflow/react';

import HomeActivity from '@activities/home/activity';
import NoticeActivity from '@activities/notices/[id]/activity';

export const { Stack, activities } = stackflow({
  transitionDuration: 350,
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: 'cupertino'
    }),
    historySyncPlugin({
      routes: {
        HomeActivity: '/',
        NoticeActivity: '/notices/:id'
      },
      fallbackActivity: () => 'HomeActivity'
    })
  ],
  activities: {
    HomeActivity,
    NoticeActivity
  }
});

export type TypeActivities = typeof activities;
