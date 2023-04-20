import styled from "styled-components";

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};


export const Wrap = styled.section`
margin-left:30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 width:400px;
  background-color: #f0fff0;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border: 1px solid #696969; 
`;

export const Title = styled.h2`
font-size: 18px;
font-weight: bold;
`;

export const WrapItem = styled.ul`
margin-top: 0;
margin-bottom: 25px;
  display: flex;
  padding-left: 0;
 
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: ${getRandomColor};
  
`;

export const ItemLabel = styled.span`
color: white;
font-size: 16px;
`;

export const ItemPercentage = styled.span`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;