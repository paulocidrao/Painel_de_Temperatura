import styled from "styled-components";

export const Container = styled.div`
   position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
`;

export const Modal = styled.section`

background-color: ${props => props.theme["white"]};
  padding: 1.25rem;
  border-radius: 8px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  h2{
    font-size: 4rem;
    margin-bottom: 0.9rem;
  };
  p{
     font-size: 2rem;
     margin-bottom: 1.2rem;
  };
  button{
     background-color: ${props => props.theme["blue"]};
    color: ${props => props.theme["white"]};
    padding: 0.625rem 1.25rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`
