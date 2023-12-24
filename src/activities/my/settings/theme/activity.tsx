import { ChangeEvent, MouseEvent } from 'react';

import { Flexbox, Radio, ThemeMode, Typography } from '@cocstorage/ui';

import AppBar from '@components/molecules/AppBar';
import GeneralAppScreen from '@components/screens/GeneralAppScreen';
import useThemeStore from '@stores/theme';

function ThemeActivity() {
  const { themeMode, setThemeMode } = useThemeStore();

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const dataThemeMode = event.currentTarget.dataset.themeMode as ThemeMode;

    setThemeMode(dataThemeMode);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();

    setThemeMode(event.currentTarget.value as ThemeMode);
  };

  return (
    <GeneralAppScreen
      appBar={AppBar({
        renderLeft: <AppBar.LeftTitle>테마</AppBar.LeftTitle>
      })}
    >
      <Flexbox direction="vertical" gap={20} customStyle={{ padding: '20px 0' }}>
        <Flexbox justifyContent="space-between" data-theme-mode="light" onClick={handleClick}>
          <Typography fontWeight="medium">라이트 모드</Typography>
          <Radio value="light" onChange={handleChange} checked={themeMode === 'light'} />
        </Flexbox>
        <Flexbox justifyContent="space-between" data-theme-mode="dark" onClick={handleClick}>
          <Typography fontWeight="medium">다크 모드</Typography>
          <Radio value="dark" onChange={handleChange} checked={themeMode === 'dark'} />
        </Flexbox>
        <Flexbox justifyContent="space-between" data-theme-mode="system" onClick={handleClick}>
          <Typography fontWeight="medium">시스템 기본</Typography>
          <Radio value="system" onChange={handleChange} checked={themeMode === 'system'} />
        </Flexbox>
      </Flexbox>
    </GeneralAppScreen>
  );
}

export default ThemeActivity;
