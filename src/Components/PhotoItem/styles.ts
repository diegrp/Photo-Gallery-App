import styled from "styled-components";

export const Container = styled.div`
  background-color: #3d3040;
  border-radius: var(--small);
  padding: var(--small);

  img{
    max-width: 100%;
    display: block;
    margin-bottom: 0.5rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  span{
    word-break: break-all;
  }

`;