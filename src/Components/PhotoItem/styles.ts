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

  button{
    font-size: 10px;
    background-color: var(--default-btn);
    border: none;
    padding: 0.3rem 0.5rem;
    border-radius: 50%;
    color: white;
    margin-left: 10px;
    transition: 0.3s;
    cursor: pointer;

    &:hover{
      background-color: var(--over-btn);
    }
  }

`;