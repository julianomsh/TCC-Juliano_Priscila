import React, { useContext, useState } from "react";
import { Platform, ActivityIndicator, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import {
    Background, ContainerSingUp,
    LogoSingUp, AreaInput, Input,
    SubmitButton, SubmitText, Text
} from '../SignIn/styles'

import { AuthContext } from '../../contexts/auth'

export default function RedPassword() {
    const { signUp, loadingAuth } = useContext(AuthContext)
    const [email, setEmail] = useState('');
    const navigation = useNavigation();

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }


    function handleRedPassword() {
        if ( email == '') {
            Alert.alert('Preencha todos os campos')
            return
        }
        else if (!validateEmail(email)) {
            Alert.alert('E-mail inválido');
            return;
        }
        Alert.alert('Redefinição de senha enviada para email');

        navigation.goBack();
    }

    return (
        <Background>
            <ContainerSingUp
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >
                <LogoSingUp
                    source={require('../../assets/LogoTcc.png')}
                />

                <Text> Redefinir senha</Text>
                <AreaInput>
                
                    <Input
                        placeholder="Email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        returnKeyType="next"
                    />
                </AreaInput>
               

                <SubmitButton onPress={handleRedPassword} activeOpacity={0.7} >
                    {
                        loadingAuth ? (
                            <ActivityIndicator size={20} color="#2E8B57" />
                        ) : (
                            <SubmitText>Enviar</SubmitText>
                        )
                    }


                </SubmitButton>

            </ContainerSingUp>
        </Background>

    )
}