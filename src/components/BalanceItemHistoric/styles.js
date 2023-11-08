import styled from "styled-components/native";

export const Container = styled.View`
    background-color:#FFF;
    margin-left:14px;

`;
export const Conteiner2 = styled.View`
    background-color:#${props => props.bg};
    border-radius:6px;
`;

export const Label = styled.Text`
color: #fff;;
font-size:19px;
font-weight: bold;
padding: 5px;
text-align: center;

`;

export const Balance = styled.Text`
justify-content:center;
margin-top:50px;
font-size:30px;
color:black;
font-weight: bold;
`;