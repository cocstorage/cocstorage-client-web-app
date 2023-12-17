import { Flexbox, Typography } from '@cocstorage/ui';

import AppBar from '@components/molecules/AppBar';

function MyAppBar() {
  return AppBar({
    title: (
      <Flexbox
        justifyContent="flex-start"
        customStyle={{
          flexGrow: 1
        }}
      >
        <Typography component="h1" variant="h3" fontWeight="bold">
          마이
        </Typography>
      </Flexbox>
    )
  });
}

export default MyAppBar;
