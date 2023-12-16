import { Flexbox, Image, Typography } from '@cocstorage/ui';

function Logo() {
  return (
    <Flexbox component="button" gap={8} alignment="center">
      <Image
        width={32}
        height={24}
        src={`https://${import.meta.env.VITE_IMAGE_DOMAIN}/assets/logo.png`}
        alt="개념글 저장소"
        disableAspectRatio
        disableBackgroundColor
      />
      <Typography
        variant="h3"
        customStyle={{
          '& > strong': {
            fontWeight: 700
          }
        }}
      >
        <strong>개념글’</strong>저장소
      </Typography>
    </Flexbox>
  );
}

export default Logo;
