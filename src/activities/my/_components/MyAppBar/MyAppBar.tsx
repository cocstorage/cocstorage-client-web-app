import { Typography } from '@cocstorage/ui';

import AppBar from '@components/molecules/AppBar';

function MyAppBar() {
  return AppBar({
    renderLeft: (
      <Typography component="h1" variant="h3" fontWeight="bold" noWrap>
        마이
      </Typography>
    ),
    disableCloseButton: true
  });
}

export default MyAppBar;
