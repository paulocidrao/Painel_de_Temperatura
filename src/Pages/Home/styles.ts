import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction:column;
    padding: 5rem;
    background: ${props => props.theme["white"]};;
    border-radius: 2.5rem;
    box-shadow: -6.25rem 6.25rem 0.938rem 0 rgba(0,0,0,0.2);
    h1{
      font-size:3.5rem
    };
    h3{
      font-size: 1.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
    };
    input{
      margin-top: 1rem;
      margin-bottom: 1rem;
      padding: 0.85rem;
      font-size:1.6rem;
      border-radius: 1rem;
      border-color:${props => props.theme["black"]}; ;
    };
    button{
      padding: 0.95rem;
      border-color: transparent;
      background-color: ${props => props.theme["blue"]};
      color: ${props => props.theme["white"]};
      font-size: 1.25rem;
      border-radius: 8px;
      font-weight: 700;
    }
`;

export const Weather = styled.div`
   display: flex;
    flex-direction: row ;
    align-items: center;
`;

export const ErroMessage = styled.span`
  color: #ff0000;
  font-weight: 900;
  margin:  0 10px  10px;
`;


