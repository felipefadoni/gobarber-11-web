import styled from 'styled-components';

export const Container = styled.div`
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  width: 100%;
  padding: 0px 16px;
  display: flex;
  align-items: center;

  input {
    flex: 1;
    background: transparent;
    border: 0px;
    color: #f4ede8;
    padding: 16px 0px;

    &::placeholder {
      color: #666360;
    }
  }

  & + div {
    margin-top: 8px;
  }

  svg {
    margin-right: 16px;
    color: #666360;
  }
`;
