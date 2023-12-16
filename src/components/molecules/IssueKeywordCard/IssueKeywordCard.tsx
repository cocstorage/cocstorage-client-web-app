import { Badge, Box, Flexbox, Skeleton, Tag, Typography } from '@cocstorage/ui';
import Icon from '@cocstorage/ui-icons';

import { IssueKeyword } from '@schemas/v1/issue-keywords/response';

import { StyledIssueKeywordCard } from './IssueKeywordCard.styles';

interface IssueKeywordCardProps {
  issueKeyword: IssueKeyword;
}

function IssueKeywordCard({
  issueKeyword: { number, keyword, isUp, isDown, isNew }
}: IssueKeywordCardProps) {
  return (
    <StyledIssueKeywordCard>
      <Tag
        variant={number <= 3 ? 'accent' : 'semiAccent'}
        customStyle={{
          display: 'flex',
          justifyContent: 'center',
          width: 24,
          height: 24,
          lineHeight: '24px',
          borderRadius: 6
        }}
      >
        {number}
      </Tag>
      <Typography
        fontWeight="bold"
        noWrap
        customStyle={{
          flex: 1
        }}
      >
        {keyword}
      </Typography>
      {isNew && <Badge severity="warning">NEW</Badge>}
      {isUp && <Badge severity="success" icon={<Icon name="ArrowDropUpFilled" />} iconOnly />}
      {isDown && <Badge severity="error" icon={<Icon name="ArrowDropDownFilled" />} iconOnly />}
    </StyledIssueKeywordCard>
  );
}

IssueKeywordCard.Skeleton = function IssueKeywordCardSkeleton() {
  return (
    <Flexbox gap={8} alignment="center" justifyContent="space-between">
      <Skeleton width={24} height={24} disableAspectRatio round={4} />
      <Box customStyle={{ flexGrow: 1, textAlign: 'left' }}>
        <Skeleton
          width="100%"
          maxWidth={55}
          minWidth={35}
          height={18}
          round={6}
          disableAspectRatio
        />
      </Box>
      <Skeleton width={21} height={16} disableAspectRatio round={4} />
    </Flexbox>
  );
};

export default IssueKeywordCard;
