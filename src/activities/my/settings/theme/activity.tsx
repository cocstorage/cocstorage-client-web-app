import GeneralAppScreen from '@components/screens/GeneralAppScreen';

import SettingsThemeAppBar from './_components/SettingsThemeAppBar';
import SettingsThemeList from './_components/SettingsThemeList';

function SettingsThemeActivity() {
  return (
    <GeneralAppScreen appBar={SettingsThemeAppBar()}>
      <SettingsThemeList />
    </GeneralAppScreen>
  );
}

export default SettingsThemeActivity;
