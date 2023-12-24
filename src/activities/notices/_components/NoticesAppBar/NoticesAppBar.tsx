import AppBar from '@components/molecules/AppBar';

function NoticesAppBar() {
  return AppBar({
    renderLeft: <AppBar.LeftTitle>새로운 소식</AppBar.LeftTitle>
  });
}

export default NoticesAppBar;
