import styled, { CSSObject } from '@emotion/styled';

export const List = styled.div<{
  toggle?: boolean;
}>`
  display: grid;
  overflow-x: auto;
  margin-top: 12px;
  padding: 0 20px;

  ${({ toggle }): CSSObject =>
    toggle
      ? {
          gridTemplateColumns: 'minmax(calc(50% - 10px), auto) minmax(calc(50% - 10px), auto)',
          columnGap: 17,
          rowGap: 12
        }
      : {
          gridAutoFlow: 'column',
          columnGap: 28
        }}
`;
