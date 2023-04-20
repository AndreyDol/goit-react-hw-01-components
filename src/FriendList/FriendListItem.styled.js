import styled from "styled-components";

export const List = styled.li`
  width: 200px;
  height: 60px;
  padding:10px;
  margin-bottom:20px;
  border: 1px solid #696969;
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

export const Status = styled.span`
  background-color: ${({isOnline} )=> (isOnline ? 'green' : 'red')};

  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

export const Name = styled.p`
  color: #212121;
  font-size: 18px;
  font-weight: bold;
`;