import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import { historySyncPlugin } from '@stackflow/plugin-history-sync';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { stackflow } from '@stackflow/react';

import HomeActivity from '@activities/home/activity';
import MyActivity from '@activities/my/activity';
import NoticeActivity from '@activities/notices/[id]/activity';
import StorageBoardsActivity from '@activities/storages/[path]/boards/acitvity';
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
        MyActivity: '/my',
        NoticeActivity: '/notices/:id',
        StoragesActivity: '/storages',
        StorageBoardsActivity: '/storages/:path/boards'
      },
      fallbackActivity: () => 'HomeActivity'
    })
  ],
  activities: {
    HomeActivity,
    MyActivity,
    NoticeActivity,
    StoragesActivity,
    StorageBoardsActivity
  }
});

export type TypeActivities = typeof activities;
export type TypeActivityNames = keyof TypeActivities;
