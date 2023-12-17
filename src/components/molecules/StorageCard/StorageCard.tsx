import { Flexbox, Image, Skeleton, Typography } from '@cocstorage/ui';

interface StorageCardProps {
  src: string;
  // TODO 추후 사용
  // path: string;
  name: string;
}

function StorageCard({ src, name }: StorageCardProps) {
  return (
    <Flexbox
      direction="vertical"
      gap={6}
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
