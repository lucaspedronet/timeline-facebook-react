import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #F2F2F2;
  max-width: 725px;
  padding: 20px 10px;
  margin: 0px;
`;

export const List = styled.ul`
  list-style: none;

  width: 700px;
  margin: 0px;
  padding: 0px;
  border: 0px;

  div {
    display: flex;
    flex-direction: row;
  }
`;
export const Card = styled.li`
  background: #FFF;

  min-height: 150px;

  border-radius: 4px;
  padding: 20px;

  & + li {
    margin-top: 20px;
  }

  aside {
    margin: 0px;
    padding: 0px;
    border: 0px;

    display: flex;
    flex-direction: row;
    align-items: center;

    div {
      margin: 0px;
      padding: 0px;
      border: 0px;

      display: flex;
      flex-direction: column;
      align-items: flex-start;

      strong {
        font-family: Arial, Helvetica, sans-serif;
        text-decoration: none;
        font-size: 14px;
        color: #4A4A4A;
      }

      p {
        font-family: Arial, Helvetica, sans-serif;
        text-decoration: none;
        font-size: 11px;
        color: #9A9A9A;
      }
    }
  }
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 10px;
`;
export const Content = styled.p`
  margin-top: 15px;
  padding: 0px;
  max-width: 592px;
  line-height: 18px;

  color: #3E3E3E;
  text-align: left;
  font-family: Helvetica, sans-serif;
  font-size: 13px;
`;
export const Row = styled.div`
  border: 1px solid #eee;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const CardComent = styled.li`
  display: flex;
  flex-direction: row;
  background: #FFF;
  list-style: none;
  min-width: 660px;
  max-width: 660px;
  width: 660px;

  /* margin-top: 20px; */
  padding: 0px;
  border: 0px;

  & + li {
    margin-top: 20px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    background: #EEEEEE;
    border-radius: 20px;
    /* padding-top: 10px; */
    padding-bottom: 10px;
    padding-left: 15px;
    padding-right: 15px;
  }
`;


