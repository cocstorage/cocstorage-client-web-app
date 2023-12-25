import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import { historySyncPlugin } from '@stackflow/plugin-history-sync';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { stackflow } from '@stackflow/react';

import HomeActivity from '@activities/home/activity';
import MyActivity from '@activities/my/activity';
import InfoActivity from '@activities/my/settings/info/activity';
import PolicyActivity from '@activities/my/settings/info/policy/activity';
import PrivacyActivity from '@activities/my/settings/info/privacy/activity';
import ThemeActivity from '@activities/my/settings/theme/activity';
import NoticeActivity from '@activities/notices/[id]/activity';
import NoticesActivity from '@activities/notices/activity';
import StorageBoardActivity from '@activities/storages/[path]/boards/[id]/activity';
import StorageBoardsActivity from '@activities/storages/[path]/boards/acitvity';
import StoragesActivity from '@activities/storages/activity';

export const { Stack, activities } = stackflow({
  transitionDuration: 350,
  plugins: [
    // TODO 기본 확장 UI 걷어내기
    basicRendererPlugin(),
    basicUIPlugin({
      theme: 'cupertino',
      rootClassName: 'basic-ui-root'
    }),
    historySyncPlugin({
      routes: {
        HomeActivity: '/',
        MyActivity: '/my',
        ThemeActivity: '/my/settings/theme',
        InfoActivity: '/my/settings/info',
        PrivacyActivity: '/my/settings/info/privacy',
        PolicyActivity: '/my/settings/info/policy',
        NoticesActivity: '/notices',
        NoticeActivity: '/notices/:id',
        StoragesActivity: '/storages',
        StorageBoardsActivity: '/storages/:path/boards',
        StorageBoardActivity: '/storages/:path/boards/:id'
      },
      fallbackActivity: () => 'HomeActivity'
    })
  ],
  activities: {
    HomeActivity,
    MyActivity,
    ThemeActivity,
    InfoActivity,
    PrivacyActivity,
    PolicyActivity,
    NoticesActivity,
    NoticeActivity,
    StoragesActivity,
    StorageBoardsActivity,
    StorageBoardActivity
  }
});

export type TypeActivities = typeof activities;
export type TypeActivityNames = keyof TypeActivities;
