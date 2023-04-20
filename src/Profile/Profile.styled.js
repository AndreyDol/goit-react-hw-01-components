import styled from 'styled-components';

export const ProfileWrap = styled.div`
  margin-left: 30px;
  display: block;
  width: 240px;
  background-color: #f0fff0;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border: 1px solid #696969;
`;

export const ProfileDescription = styled.div`
  display: block;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

export const ProfileImg = styled.img`
  display: block;
  border-radius: 50%;
  width: 140px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
`;

export const TextName = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const TextTag = styled.p`
  color: #696969;
  font-size: 16px;
  margin-top: 0px;
`;

export const TextLocation = styled.p`
  color: #696969;
  font-size: 16px;
`;

export const ListWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: #d3d3d3;
`;

export const Label = styled.span`
  color: #696969;
  font-size: 16px;
`;

export const Quantity = styled.span`
  color: #212121;
  font-size: 16px;
font-weight: bold;
`;

export const List = styled.li`
  width: 80px;
  height: 60px;
  border: 1px solid #696969;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
