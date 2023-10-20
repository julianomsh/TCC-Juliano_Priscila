import React, { useState } from "react";
import { Background,
         Input,
         SubmitButton,
         SubmitText,
         
        } from './styles';

import { SafeAreaView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'; 
//Keyboard.dismiss() - esconder o teclado quando clicar fora 

import Header from '../../components/Header';
import RegisterTypes from '../../components/RegisterTypes';
import api from '../../services/api';
import { format } from 'date-fns';
import { useNavigation } from "@react-navigation/native";
import { TextInputMask } from 'react-native-masked-text';

export default function New(){
    const navigation = useNavigation(); 

    const [labelInput, setLabelInput] = useState('');
    const [valueInput, setValueInput] = useState('');
    const [type, setType] = useState('receita');

    function handleSubmit(){
        Keyboard.dismiss();

        if(isNaN(parseFloat(valueInput)) || type === null){
            alert('Preencha todos os campos!')
            return;
        }

        Alert.alert(
            'Confirmando dados',
            `Tipo: ${type} - Valor ${parseFloat(valueInput)}`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Salvar',
                    onPress: () => handleAdd()
                }

            ]
        )
    }

    async function handleAdd(){
        Keyboard.dismiss();

        await api.post('/receive', {
            description: labelInput,
            value: Number(valueInput),
            type: type,
            date: format(new Date(), 'dd/MM/yyyy')
        })

        setLabelInput('');
        setValueInput('');
        navigation.navigate('Home')
    }

    return(
        <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss()}> 
            <Background>
                <Header title="Registrando" />

            <SafeAreaView style={{marginTop: 14, alignItems: 'center'}}>
                <Input 
                    placeholder="Descrição do Registro"
                    value={labelInput}
                    onChangeText={ (text) => setLabelInput(text) }
                />
                
                <TextInputMask style={{height: 50, width: 372, backgroundColor: '#FFF', marginBottom:15, borderRadius:4, paddingLeft:10}} 
                    type={'money'}
                    maxLength={18}
                    keyboardType="number-pad"
                    placeholder="Valor da conta"
                    value={valueInput}
                    onChangeText={ (text) => {setValueInput(text);
                        text = text.replace('R$', '');
                        text = text.replace('.', '');
                        text = text.replace(',', '.');
                        setValueInput(Number(text))                 
                    }}            
                />

                <RegisterTypes type={type} sendTypeChanged={ (item) => setType(item) } />

                <SubmitButton onPress={handleSubmit} >
                    <SubmitText>Registrar</SubmitText>
                </SubmitButton>

            </SafeAreaView>

            </Background>
        </TouchableWithoutFeedback>
    )
}