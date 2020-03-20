import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;


  background: #4A90E2;
  width: 100%;
  height: 64px;
  padding-right: 42px;
  padding-left: 42px;

  img {
    width: 120px;
    height: 23px;
  }

  strong {
    color: #FFF;
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
  }
`;
