import React, { useContext, useState } from "react";
import { View, Text } from 'react-native';
import { Platform, ActivityIndicator } from 'react-native';

import {
    Background, Container,
    Logo, AreaInput, Input,
    SubmitButton, SubmitText,
} from '../SignIn/styles'

import { AuthContext } from "../../contexts/auth";

export default function SignUp() {

    const { signUp, loadingAuth } = useContext(AuthContext)
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSignUp() {
        if(nome == '' || email == '' || password == '')
        return;
        
        signUp(email, password, nome);
    }
    return (
        <Background>
            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >
                <Logo
                    source={require('../../assets/LogoTcc.png')}
                />
                <AreaInput>
                    <Input
                        placeholder="Nome"
                        value={nome}
                        onChangeText={(text) => setNome(text)}
                    />
                </AreaInput>
                <AreaInput>
                    <Input
                        placeholder="Email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Senha"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                    />
                </AreaInput>

                <SubmitButton onPress={handleSignUp} activeOpacity={0.7} >
                    {
                        loadingAuth ? (
                            <ActivityIndicator size={20} color="#2E8B57" />
                        ) : (
                            <SubmitText>Cadastrar</SubmitText>
                        )
                    }


                </SubmitButton>

            </Container>
        </Background>

    )
}