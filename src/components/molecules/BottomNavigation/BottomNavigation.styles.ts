import styled from '@emotion/styled';

export const StyledBottomNavigation = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 60px;
  background-color: ${({
    theme: {
      palette: { background }
    }
  }) => background.bg};
  border-top: 1px solid
    ${({
      theme: {
        palette: { box }
      }
    }) => box.filled.normal};
`;

export const NavigationItem = styled.li`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  cursor: pointer;
`;
