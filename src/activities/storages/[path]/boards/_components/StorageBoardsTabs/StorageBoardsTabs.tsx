import { Tabs, Tab } from '@cocstorage/ui';

function StorageBoardsTabs() {
  const handleChange = () => {
    //
  };

  return (
    <Tabs
      onChange={handleChange}
      value="latest"
      fullWidth
      // TODO 동작하지 않는 문제 수정
      centered
      customStyle={{
        width: 'calc(100% + 40px)',
        margin: '0 -20px',
        '& > div': {
          justifyContent: 'center'
        }
      }}
    >
      <Tab text="최신" value="latest" />
      <Tab text="베스트" value="popular" />
      <Tab text="워스트" value="worst" />
    </Tabs>
  );
}

export default StorageBoardsTabs;
