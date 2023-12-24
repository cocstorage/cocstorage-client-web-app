import { MouseEvent } from 'react';

import { Flexbox, Image, Typography, useTheme, Button } from '@cocstorage/ui';

import AppBar from '@components/molecules/AppBar';
import GeneralAppScreen from '@components/screens/GeneralAppScreen';
import useFlow from '@hooks/useFlow';
import type { TypeActivityNames } from '@stackflow-config';

function InfoActivity() {
  const { push } = useFlow();

  const {
    theme: {
      mode,
      palette: { text }
    }
  } = useTheme();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const activity = event.currentTarget.dataset.activityName as TypeActivityNames;

    push(activity, {});
  };

  return (
    <GeneralAppScreen
      appBar={AppBar({
        renderLeft: <AppBar.LeftTitle>정보</AppBar.LeftTitle>
      })}
    >
      <Flexbox
        direction="vertical"
        alignment="center"
        justifyContent="center"
        customStyle={{ height: '100%' }}
      >
        <Image
          width={40}
          height={30}
          src={`https://${import.meta.env.VITE_IMAGE_DOMAIN}/assets/logo.png`}
          alt="개념글 저장소"
          disableAspectRatio
          disableBackgroundColor
        />
        <Typography variant="h3" fontWeight="bold" customStyle={{ marginTop: 8 }}>
          개념글 저장소
        </Typography>
        <Typography variant="s1" color={text[mode].text2} customStyle={{ marginTop: 4 }}>
          1.0.0
        </Typography>
        <Button
          data-activity-name="PolicyActivity"
          onClick={handleClick}
          customStyle={{ marginTop: 30 }}
        >
          이용약관
        </Button>
        <Button
          data-activity-name="PrivacyActivity"
          onClick={handleClick}
          customStyle={{ marginTop: 10 }}
        >
          개인정보처리방침
        </Button>
      </Flexbox>
    </GeneralAppScreen>
  );
}

export default InfoActivity;
