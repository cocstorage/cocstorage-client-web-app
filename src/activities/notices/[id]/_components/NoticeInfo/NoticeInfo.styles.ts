import { Typography } from '@cocstorage/ui';
import styled from '@emotion/styled';

export const Content = styled(Typography)`
  margin-top: 40px;

  * {
    max-width: 100%;
    border-radius: 8px;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  & > div {
    &:after {
      content: '';
      display: block;
      width: 2px;
      height: 2px;
      margin: 0 5px;
      border-radius: 50%;
      background-color: ${({
        theme: {
          mode,
          palette: { text }
        }
      }) => text[mode].text1};
    }
    &:last-child:after {
      display: none;
    }
  }
`;
