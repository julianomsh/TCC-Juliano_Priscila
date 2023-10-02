import styled from 'styled-components';


export const Background = styled.View`
flex:1;
background-color: #FFFFFF;
`;

export const Container = styled.KeyboardAvoidingView`
flex:1;
align-items:center;
justify-content: center;
`;

export const Logo = styled.Image`
margin-bottom: 25px;

`;

export const AreaInput = styled.View`
flex-direction: row;
`;

export const Input = styled.TextInput`
background-color: #F4F6F5;
width: 90%;
font-size: 17px;
padding: 10px;
border-radius: 8px;
color: #121212;
margin-bottom: 15px;

`;

export const SubmitButton = styled.TouchableOpacity`
width: 90%;
height: 45px;
border-radius: 8px;
background-color: #2E8B57;
margin-top: 15px;
align-items: center;
justify-content: center;

`;

export const SubmitText = styled.Text`
font-size: 20px;
color: #FFFFFF;
font-weight: bold

`;

export const Link = styled.TouchableOpacity`
margin-top: 15px;
margin-bottom: 10px;
`;

export const LinkText = styled.Text`
font-weight: bold
`;