import React, { useState, useContext, useRef } from "react";
import { Platform, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';

import {
    Background, Container,
    Logo, AreaInput, Input,
    SubmitButton, SubmitText,
    Link, LinkText, Icon, AreaInput1, AreaInput2
} from './styles'

import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons'
import { AuthContext } from '../../contexts/auth'




export default function SignIn() {
    const navigation = useNavigation();
    const { signIn, loadingAuth } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Visupassword, setVisupassword] = useState(true);
    const segundoInputRef = useRef(null);

    function handleLogin() {
        if (email == '' || password == '') {
            Alert.alert('Preencha todos os campos')
            return
        }
            signIn(email, password); 
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

                <AreaInput1>
                    <Input
                        placeholder="Email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        returnKeyType="next"
                        onSubmitEditing={() => {
                            segundoInputRef.current.focus(); // Quando o "Next" for pressionado, o segundo input receberá o foco
                        }}
                    />
                </AreaInput1>

                <AreaInput2>
                    <Input
                        placeholder="Senha"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={Visupassword}
                        ref={segundoInputRef} // Atribua a referência ao segundo input
                        returnKeyType="done" // Você pode definir o returnKeyType como "done" para o último input

                    />
                    <Icon>
                        <TouchableOpacity onPress={() => setVisupassword(!Visupassword)}>
                            {
                                Visupassword ?
                                    <Ionicons name="eye" color="black" size={25} /> : <Ionicons name="eye-off" color="black" size={25} />
                            }
                        </TouchableOpacity>
                    </Icon>
                </AreaInput2>

                <SubmitButton activeOpacity={0.7} onPress={handleLogin}>
                    {
                        loadingAuth ? (
                            <ActivityIndicator size={20} color="#FFF" />
                        ) : (
                            <SubmitText>Acessar</SubmitText>
                        )
                    }
                </SubmitButton>

                <Link onPress={() => navigation.navigate('RedPassword')}>
                    <LinkText>Esqueceu sua Senha?</LinkText>
                </Link>

                <Link onPress={() => navigation.navigate('SignUp')}>
                    <LinkText>Criar uma Conta?</LinkText>
                </Link>
            </Container>
        </Background>

    )
}