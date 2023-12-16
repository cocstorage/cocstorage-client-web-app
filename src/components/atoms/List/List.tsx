import { PropsWithChildren } from 'react';

import { CSSValue, GenericComponentProps } from '@cocstorage/ui';

import { StyledList } from './List.styles';

export interface ListProps extends GenericComponentProps<unknown> {
  spaceBetween?: CSSValue;
}

function List({ children, spaceBetween = 16, customStyle }: PropsWithChildren<ListProps>) {
  return (
    <StyledList spaceBetween={spaceBetween} css={customStyle}>
      {children}
    </StyledList>
  );
}

export default List;
