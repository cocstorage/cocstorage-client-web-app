import { Flexbox, Skeleton, Tag, Typography } from '@cocstorage/ui';
import { convertToReactElement } from '@cocstorage/ui-editor';
import Icon from '@cocstorage/ui-icons';

import useStorageBoard from '../../_hooks/useStorageBoard';

function StorageBoardContent() {
  const { data, isPending } = useStorageBoard();

  const handleClick = () =>
    window.open(
      `https://gall.dcinside.com/board/view/?id=${data?.sourceCode}&no=${data?.scrapCode}&exception_mode=recommend&page=1`,
      '_blank'
    );

  if (isPending) {
    return (
      <>
        <Skeleton
          width="100%"
          height="24vh"
          round={6}
          customStyle={{ margin: '40px 0 20px' }}
          disableAspectRatio
        />
        <Skeleton
          width="80%"
          height={16}
          round={6}
          customStyle={{ marginBottom: 10 }}
          disableAspectRatio
        />
        <Skeleton
          width="40%"
          height={16}
          round={6}
          customStyle={{ marginBottom: 10 }}
          disableAspectRatio
        />
        <Skeleton
          width="60%"
          height={16}
          round={6}
          customStyle={{ marginBottom: 10 }}
          disableAspectRatio
        />
      </>
    );
  }

  return (
    <>
      {data?.sourceCode && data?.sourceCode !== 'fahumor' && (
        <Flexbox
          gap={8}
          customStyle={{ marginTop: 20, flexWrap: 'wrap', justifyContent: 'flex-end' }}
        >
          <Tag
            startIcon={<Icon name="LogoutOutlined" />}
            onClick={handleClick}
            customStyle={{ cursor: 'pointer' }}
          >
            출처
          </Tag>
          <Tag startIcon={<Icon name="EmailOutlined" />}>cocstoragehelps@gmail.com</Tag>
        </Flexbox>
      )}
      {data?.sourceCode === 'fahumor' && (
        <Flexbox
          gap={8}
          justifyContent="flex-end"
          customStyle={{ marginTop: 20, flexWrap: 'wrap' }}
        >
          <Tag startIcon={<Icon name="EmailOutlined" />}>cocstoragehelps@gmail.com</Tag>
        </Flexbox>
      )}
      {data?.sourceCode && (
        <Typography
          component="article"
          lineHeight="main"
          customStyle={{
            marginTop: 40,
            '*': {
              maxWidth: '100%',
              borderRadius: 8
            }
          }}
          dangerouslySetInnerHTML={{
            __html: data?.content
          }}
        />
      )}
      {!data?.sourceCode && (
        <Typography
          component="article"
          lineHeight="main"
          customStyle={{
            marginTop: 40
          }}
        >
          {convertToReactElement(data?.contentJson || [])}
        </Typography>
      )}
    </>
  );
}

export default StorageBoardContent;
