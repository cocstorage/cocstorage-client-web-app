import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import { historySyncPlugin } from '@stackflow/plugin-history-sync';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { stackflow } from '@stackflow/react';

import HomeActivity from '@activities/home/activity';
import NoticeActivity from '@activities/notices/[id]/activity';
import StoragesActivity from '@activities/storages/activity';

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
        StoragesActivity: '/storages',
        NoticeActivity: '/notices/:id'
      },
      fallbackActivity: () => 'HomeActivity'
    })
  ],
  activities: {
    HomeActivity,
    StoragesActivity,
    NoticeActivity
  }
});

export type TypeActivities = typeof activities;
export type TypeActivityNames = keyof TypeActivities;
