import styled from "styled-components/native";


export const Container = styled.SafeAreaView`
flex:1;
background-color:#F0F4FF;
align-items: center;

`;

export const Message = styled.Text`
font-size: 26px;
font-weight: bold;
margin-top: 24px;
margin-bottom: 15px;
`;

export const Name = styled.Text`
font-size: 25px;
margin-bottom: 24px;
margin-top: 30px;
padding: 0 14px;
color: #121212;
height: 30px;
margin-left: 1px;

`;

export const LogoutButton = styled.TouchableOpacity`
justify-content:center;
align-items: center;
width: 90%;
height: 45px;
border-radius: 8px;
border-width: 1px;
background-color: darkgreen;
margin-top:15px;
`;

export const LogoutText = styled.Text`
font-size: 25px;
font-weight: bold;
color:white
`;

export const Logo = styled.SafeAreaView`
margin-top: 24px;
margin-bottom: 10px;
border-radius: 10px;
padding: 10px;
`;

export const Textlabel = styled.View`
font-size: 16px;
font-Weight: bold;
margin-Bottom: 4px;
margin-top: 15px;
border: 1px ;
border-color: black;
border-radius: 10px;
width: 90%;
height: 60px;
border-width: 1px;
align-items: center;
flex-direction: row;
padding-left:15px;


`
export const Textinfo = styled.Text`
font-Size: 25px;
margin-Bottom: 12px;
margin-top: 15px;
`