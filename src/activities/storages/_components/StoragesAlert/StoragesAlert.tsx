import { Alert } from '@cocstorage/ui';
import Icon from '@cocstorage/ui-icons';

function StoragesAlert() {
  return (
    <Alert icon={<Icon name="BulbOutlined" />} customStyle={{ marginTop: 14 }}>
      게시판을 만들 수 있는 기능을 준비하고 있어요! 조금만 기다려주세요.
    </Alert>
  );
}

export default StoragesAlert;
