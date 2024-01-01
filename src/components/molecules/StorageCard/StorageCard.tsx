import { Flexbox, Image, Skeleton, Typography } from '@cocstorage/ui';

import useFlow from '@hooks/useFlow';
import { Id } from '@typings/common';
import getImageName from '@utils/getImageName';

interface StorageCardProps {
  src: string;
  path: Id;
  name: string;
  onClick?: () => void;
}

function StorageCard({ src, path, name, onClick }: StorageCardProps) {
  const { push } = useFlow();

  const handleClick = () => {
    if (typeof onClick === 'function') {
      onClick();
      return;
    }

    push('StorageBoardsActivity', {
      path
    });
  };

  return (
    <Flexbox
      direction="vertical"
      gap={6}
      onClick={handleClick}
      customStyle={{
        cursor: 'pointer'
      }}
    >
      <Image src={src || ''} round={6} alt={getImageName(src)} />
      <Typography customStyle={{ textAlign: 'center' }}>{name}</Typography>
    </Flexbox>
  );
}

StorageCard.Skeleton = function StorageCardSkeleton() {
  return (
    <Flexbox direction="vertical" gap={6}>
      <Skeleton round={6} />
      <Skeleton
        width={70}
        height={18}
        round={6}
        disableAspectRatio
        customStyle={{
          margin: 'auto'
        }}
      />
    </Flexbox>
  );
};

export default StorageCard;
