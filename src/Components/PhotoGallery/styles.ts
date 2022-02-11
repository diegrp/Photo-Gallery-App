import styled from 'styled-components';

export const ScreenWarning = styled.div`
  text-align: center;
  .emoji{
    font-size: 50px;
    margin-bottom: 20px;
  }
`;

export const PhotoList = styled.div`
  display: grid;
  gap: var(--small);
  grid-template-columns: repeat(3, minmax(250px, 1fr));
`;