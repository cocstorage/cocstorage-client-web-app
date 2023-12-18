import { Flexbox, Image, Skeleton, Typography } from '@cocstorage/ui';

import useFlow from '@hooks/useFlow';

interface StorageCardProps {
  src: string;
  path: string;
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
      <Image src={src || ''} round={6} alt={name} />
      <Typography customStyle={{ textAlign: 'center' }}>{name}</Typography>
    </Flexbox>
  );
}

StorageCard.Skeleton = function StorageCardSkeleton() {
  return (
    <Flexbox direction="vertical" gap={6}>
      <Skeleton round={6} />
      <Skeleton width={70} height={18} round={6} disableAspectRatio />
    </Flexbox>
  );
};

export default StorageCard;
