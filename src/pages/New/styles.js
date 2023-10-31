import styled from 'styled-components/native';

export const Background = styled.View`
    flex: 1;
    background-color: #F0F4FF;
`;

export const ConteinerInput = styled.View`
    margin-top: 10px;
    width: 90%;
    
    align-items: center;
    flex-direction: row;
    height: 45px;
    border-radius: 4px;
    margin-bottom: 14px; 
`;

export const Input = styled.TextInput`
    height: 50px;
    width: 92%;
    background-color: #FFF;
    font-size: 17px;
    padding: 0 8px;
    margin-bottom: 14px;
    border-radius: 4px;
`;

export const Input_tipo = styled.TextInput`
  margin-left: 8px;
    height: 50px;
    width: 50%;
    background-color: #FFF;
    font-size: 17px;
    padding: 0 5px;
    margin-bottom: 14px;
    border-radius: 4px;

`;

export const Input_status = styled.TextInput`
    height: 50px;
    width: 50%;
    background-color: #FFF;
    font-size: 17px;
    padding: 0 5px;
    margin-bottom: 14px;
    border-radius: 4px;
`;

export const Input_Data = styled.TextInput`
    margin-left: 8px;
    height: 50px;
    width: 50%;
    background-color: #FFF;
    font-size: 17px;
    padding: 0 8px;
    margin-bottom: 14px;
    border-radius: 4px;
`;

export const InputObservacao = styled.TextInput`
    height: 100px;
    width: 92%;
    background-color: #FFF;
    font-size: 17px;
    padding: 0 8px;
    margin-bottom: 14px;
    border-radius: 4px;
`;




export const SubmitButton = styled.TouchableOpacity`
    width: 90%;
    height: 50px;
    align-items: center;
    justify-content: center;
    background-color: #00b94a; 
    border-radius: 4px;
`;

export const SubmitText = styled.Text`
    color: #FFF;
    font-size: 21px;
    font-weight: bold;
`;
