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

export const UploadForm = styled.form`
  background-color: #3d3040;
  padding: var(--small);
  border-radius: 0.5rem;
  margin-bottom: 30px;

  input[type="submit"]{
    font-size: 14px;
    padding: 0.3rem 1.5rem;
    background-color: var(--default-btn);
    color: #fff;
    border: none;
    border-radius: var(--small);
    cursor: pointer;
    margin: 0 25px;
    transition: 0.3s;

    &:hover{
      background-color: var(--over-btn);
    }
  }
`;