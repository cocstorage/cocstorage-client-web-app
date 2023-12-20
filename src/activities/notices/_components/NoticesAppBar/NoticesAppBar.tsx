import { Flexbox, Typography } from '@cocstorage/ui';

import AppBar from '@components/molecules/AppBar';

function NoticesAppBar() {
  return AppBar({
    title: (
      <Flexbox
        justifyContent="flex-start"
        gap={8}
        customStyle={{
          flexGrow: 1
        }}
      >
        <Typography component="h3" variant="h3" fontWeight="bold">
          새로운 소식
        </Typography>
      </Flexbox>
    )
  });
}

export default NoticesAppBar;
