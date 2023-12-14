import Logo from '@components/atoms/Logo';

export interface AppBarProps {
  height?: string;
  renderLeft?: () => void;
  renderRight?: () => void;
}

function AppBar({ height = '50px', renderLeft = () => <Logo />, renderRight }: AppBarProps = {}) {
  return {
    height,
    renderLeft,
    renderRight
  };
}

export default AppBar;
