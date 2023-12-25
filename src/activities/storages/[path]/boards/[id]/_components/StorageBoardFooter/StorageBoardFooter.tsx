import { ChangeEvent, useState } from 'react';

import { IconButton } from '@cocstorage/ui';
import Icon from '@cocstorage/ui-icons';

import useFillKeyboardArea from '@hooks/useFillKeyboardArea';

import { CommentBarWrapper, CommentBarInner, CommentTextArea } from './StorageBoardFooter.styles';

function StorageBoardFooter() {
  const { handleFocus } = useFillKeyboardArea();

  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setValue(event.currentTarget.value);

  return (
    <CommentBarWrapper>
      <CommentBarInner>
        <CommentTextArea
          rows={1}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleFocus}
          value={value}
          placeholder="내용을 입력해 주세요."
        />
        <IconButton customStyle={{ marginRight: 10 }}>
          <Icon name="SendOutlined" />
        </IconButton>
      </CommentBarInner>
    </CommentBarWrapper>
  );
}

export default StorageBoardFooter;
