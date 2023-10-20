import React, { useContext, useState, useRef } from "react";
import { Platform, ActivityIndicator, Alert, TouchableOpacity } from 'react-native';

import {
    Background, ContainerSingUp,
    LogoSingUp, AreaInput, Input,
    SubmitButton, SubmitText, AreaInput2, Icon
} from '../SignIn/styles'

import { AuthContext } from "../../contexts/auth";

import { Ionicons } from '@expo/vector-icons'

export default function SignUp() {

    const { signUp, loadingAuth } = useContext(AuthContext)
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [Visupassword, setVisupassword] = useState(true);
    const segundoInputRef = useRef(null);
    const terceiroInputRef = useRef(null);
    const quartoInputRef = useRef(null);

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }


    function handleSignUp() {
        if (nome == '' || email == '' || password == '' || password2 == '') {
            Alert.alert('Preencha todos os campos')
            return
        }
        else if (!validateEmail(email)) {
            Alert.alert('E-mail inválido');
            return;
        }
        else if (password != password2) {
            Alert.alert('Senhas não são iguais')
            return
        }

        signUp(email, password, nome);
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
                <AreaInput>
                    <Input
                        placeholder="Nome"
                        value={nome}
                        onChangeText={(text) => setNome(text)}
                        returnKeyType="next"
                        onSubmitEditing={() => {
                            segundoInputRef.current.focus(); // Quando o "Next" for pressionado, o segundo input receberá o foco
                        }}
                    />
                </AreaInput>
                <AreaInput>
                    <Input
                        placeholder="Email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        ref={segundoInputRef}
                        returnKeyType="next"
                        onSubmitEditing={() => {
                            terceiroInputRef.current.focus(); // Quando o "Next" for pressionado, o segundo input receberá o foco
                        }}
                    />
                </AreaInput>

                <AreaInput2>
                    <Input
                        placeholder="Senha"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={Visupassword}
                        ref={terceiroInputRef}
                        returnKeyType="next"
                        onSubmitEditing={() => {
                            quartoInputRef.current.focus(); // Quando o "Next" for pressionado, o segundo input receberá o foco
                        }}

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

                <AreaInput2>
                    <Input
                        placeholder="Repita a Senha"
                        onChangeText={() => setPassword2()}
                        value={password2}
                        secureTextEntry={Visupassword}
                        ref={quartoInputRef} // Atribua a referência ao segundo input
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

                <SubmitButton onPress={handleSignUp} activeOpacity={0.7} >
                    {
                        loadingAuth ? (
                            <ActivityIndicator size={20} color="#2E8B57" />
                        ) : (
                            <SubmitText>Cadastrar</SubmitText>
                        )
                    }


                </SubmitButton>

            </ContainerSingUp>
        </Background>

    )
}