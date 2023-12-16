import { useState } from 'react';

import { Box, Button, Flexbox, Typography, useTheme } from '@cocstorage/ui';
import Icon from '@cocstorage/ui-icons';
import { useQuery } from '@tanstack/react-query';

import { fetchIssueKeywordRank } from '@apis/v1/issue-keywords';
import IssueKeywordCard from '@components/molecules/IssueKeywordCard';
import queryKey from '@constants/queryKey';

import { List } from './HomeIssueKeywordRank.styles';

function HomeIssueKeywordRank() {
  const {
    theme: {
      mode,
      palette: { text }
    }
  } = useTheme();

  const { data, isPending } = useQuery({
    queryKey: queryKey.issueKeywords.rank(),
    queryFn: () => fetchIssueKeywordRank()
  });

  const [toggle, setToggle] = useState(false);

  const ranks = data?.ranks || [];
  const gridRanks = ranks
    .map((rank) => [rank, ranks.find(({ number: pairNumber }) => rank.number + 5 === pairNumber)])
    .filter((rank) => rank[1])
    .flat();

  const handleClick = () => setToggle((prevState) => !prevState);

  return (
    <Box
      component="section"
      customStyle={{
        margin: '32px -20px 0'
      }}
    >
      <Flexbox
        justifyContent="space-between"
        customStyle={{
          padding: '0 20px'
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          지금 막 뜨고 있어요!
        </Typography>
        <Button
          variant="transparent"
          size="small"
          onClick={handleClick}
          disabled={!isPending && !ranks.length}
          startIcon={
            <Icon
              name={toggle ? 'CaretSemiUpOutlined' : 'CaretSemiDownOutlined'}
              width={16}
              height={16}
              color={text[mode].text1}
            />
          }
          customStyle={{
            color: text[mode].text1
          }}
        >
          {toggle ? '접기' : '펼치기'}
        </Button>
      </Flexbox>
      <List toggle={toggle}>
        {isPending &&
          Array.from({ length: 10 })
            .map((_, index) => index)
            .map((index) => <IssueKeywordCard.Skeleton key={`issue-keyword-skeleton-${index}`} />)}
        {!isPending &&
          !toggle &&
          ranks.map((issueKeyword) => (
            <IssueKeywordCard
              key={`issue-keyword-${issueKeyword.keywordId}`}
              issueKeyword={issueKeyword}
            />
          ))}
        {!isPending &&
          toggle &&
          gridRanks.map((issueKeyword) =>
            issueKeyword ? (
              <IssueKeywordCard
                key={`issue-keyword-${issueKeyword.keywordId}`}
                issueKeyword={issueKeyword}
              />
            ) : null
          )}
      </List>
    </Box>
  );
}

export default HomeIssueKeywordRank;
