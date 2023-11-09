import React, { useState } from "react";
import {
    Background,
    Input,
    SubmitButton,
    SubmitText,
    ConteinerInput,
    Input_tipo,
    Input_status,
    Input_Data,
    InputObservacao

} from './styles';

import { SafeAreaView, TouchableWithoutFeedback, Keyboard, Alert, DatePickerIOS } from 'react-native';
//Keyboard.dismiss() - esconder o teclado quando clicar fora 

import Header from '../../components/Header';
import RegisterTypes from '../../components/RegisterTypes';
import api from '../../services/api';
import { format } from 'date-fns';
import { useNavigation } from "@react-navigation/native";
import { TextInputMask } from 'react-native-masked-text';
import SelectDropdown from 'react-native-select-dropdown'

export default function New() {
    const navigation = useNavigation();

    const [labelInput, setLabelInput] = useState(''); // DESCRICAO
    const [valueInput, setValueInput] = useState(''); // VALOR
    const [valueAccount_type, setValueAccount_type] = useState('');
    const [valueStatus, setValueStatus] = useState('');
    const [valueDate, setValuedate] = useState('');
    const [valueObservation, setValueObservation] = useState('');
    const [type, setType] = useState('receita');

    function handleSubmit() {
        Keyboard.dismiss();

        if (isNaN(parseFloat(valueInput)) || type === null  || valueDate == '') {
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

    async function handleAdd() {
        Keyboard.dismiss();

        await api.post('/receive', {
            description: labelInput,
            value: Number(valueInput),
            maturity: valueDate,
            account_type: valueAccount_type,
            status: valueStatus,
            observation: valueObservation,
            type: type,
            date: format(new Date(), 'dd/MM/yyyy')
        })

        setLabelInput('');
        setValueInput('');
        setValuedate('');
        setValueAccount_type('');
        setValueStatus('');
        setValueObservation('');

        navigation.navigate('Home')
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Background>
                <Header title="Registrando" />


                <SafeAreaView style={{ marginTop: 14, alignItems: 'center' }}>
                    <Input
                        placeholder="Descrição do Registro"
                        maxLength={50}
                        value={labelInput}
                        onChangeText={(text) => setLabelInput(text)}
                    />
                    <ConteinerInput>
                        <TextInputMask style={{ height: 50, width: '50%', backgroundColor: '#FFF', marginBottom: 14, borderRadius: 4, paddingLeft: 10, fontSize: 17 }}
                            type={'money'}
                            maxLength={18}
                            keyboardType="number-pad"
                            placeholder="Valor da conta"
                            value={valueInput}
                            onChangeText={(text) => {
                                setValueInput(text);
                                text = text.replace('R$', '');
                                text = text.replace('.', '');
                                text = text.replace(',', '.');
                                setValueInput(Number(text))
                            }}
                        />
                        <Input_Data
                            placeholder="DD/MM/AAAA"
                            value={valueDate}
                            onChangeText={(text) => setValuedate(text)}
                        />
                    </ConteinerInput>

                    <ConteinerInput>

                        <Input_tipo
                            placeholder="Fixa/Variavel"
                            value={valueAccount_type}
                            onChangeText={(text) => setValueAccount_type(text)}
                        />

                    </ConteinerInput>

                    <InputObservacao
                        placeholder="Observacao / Codigo de barras"
                        maxLength={200}
                        value={valueObservation}
                        onChangeText={(text) => setValueObservation(text)}
                    />



                    <RegisterTypes type={type} sendTypeChanged={(item) => setType(item)} />

                    <SubmitButton onPress={handleSubmit} >
                        <SubmitText>Registrar</SubmitText>
                    </SubmitButton>

                </SafeAreaView>


            </Background>
        </TouchableWithoutFeedback>
    )
}