import { MouseEvent } from 'react';

import { Flexbox, Typography, useTheme } from '@cocstorage/ui';
import Icon from '@cocstorage/ui-icons';

import useFlow from '@hooks/useFlow';
import type { TypeActivityNames } from '@stackflow-config';

function MyMenuList() {
  const { push } = useFlow();

  const {
    theme: {
      mode,
      palette: { text }
    }
  } = useTheme();

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const activityName = event.currentTarget.dataset.acitivityName as TypeActivityNames;

    push(activityName, {});
  };

  return (
    <Flexbox direction="vertical" gap={20} customStyle={{ padding: '20px 0' }}>
      <Flexbox
        gap={12}
        alignment="center"
        data-acitivity-name="NoticesActivity"
        onClick={handleClick}
      >
        <Icon name="LoudSpeakerOutlined" />
        <Flexbox direction="vertical" gap={2}>
          <Typography fontWeight="bold">새로운 소식</Typography>
          <Typography color={text[mode].text1}>공지사항, 업데이트 내용</Typography>
        </Flexbox>
      </Flexbox>
      <Flexbox gap={12} alignment="center">
        <Icon name="ThemeOutlined" />
        <Flexbox direction="vertical" gap={2}>
          <Typography fontWeight="bold">테마</Typography>
          <Typography color={text[mode].text1}>라이트 모드, 다크 모드</Typography>
        </Flexbox>
      </Flexbox>
      <Flexbox gap={12} alignment="center">
        <Icon name="InfoOutlined" />
        <Flexbox direction="vertical" gap={2}>
          <Typography fontWeight="bold">정보</Typography>
          <Typography color={text[mode].text1}>버전 / 이용약관 및 개인정보처리방침</Typography>
        </Flexbox>
      </Flexbox>
    </Flexbox>
  );
}

export default MyMenuList;
