import styled, { CSSObject } from '@emotion/styled';

import type { ListProps } from './List';

export const StyledList = styled.div<Pick<ListProps, 'spaceBetween'>>`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  padding: 0 20px;
  overflow-x: auto;

  ${({ spaceBetween }): CSSObject =>
    spaceBetween
      ? {
          columnGap: spaceBetween
        }
      : {}}
`;
