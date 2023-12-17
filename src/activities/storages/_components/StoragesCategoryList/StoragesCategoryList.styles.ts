import styled from '@emotion/styled';

export const StyledStoragesCategoryList = styled.section`
  position: sticky;
  top: 0;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  column-gap: 10px;
  margin: 20px -20px 0;
  padding: 0 20px 10px;
  overflow-x: auto;
  background-color: ${({
    theme: {
      palette: { background }
    }
  }) => background.bg};
  z-index: 2;
`;
