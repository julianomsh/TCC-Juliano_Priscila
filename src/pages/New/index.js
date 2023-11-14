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

import { SafeAreaView, TouchableWithoutFeedback, Keyboard, Alert, Text } from 'react-native';
//Keyboard.dismiss() - esconder o teclado quando clicar fora 

import Header from '../../components/Header';
import RegisterTypes from '../../components/RegisterTypes';
import api from '../../services/api';
import { format } from 'date-fns';
import { useNavigation } from "@react-navigation/native";
import { TextInputMask } from 'react-native-masked-text';
import SelectDropdown from 'react-native-select-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons'

export default function New() {
    const navigation = useNavigation();

    const [labelInput, setLabelInput] = useState(''); // DESCRICAO
    const [valueInput, setValueInput] = useState(''); // VALOR
    const [valueAccount_type, setValueAccount_type] = useState('');
    const [valueStatus, setValueStatus] = useState('');
    const [valueDate, setValuedate] = useState('');
    const [valueObservation, setValueObservation] = useState('');
    const [type, setType] = useState('receita');
    const tipo = ["Fixa", "Variavel"]

    const [showDatePicker, setShowDatePicker] = useState(false);

    function handleSubmit() {
        Keyboard.dismiss();

        if (isNaN(parseFloat(valueInput)) || type === null || valueDate == '') {
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

                        {Platform.OS === 'ios' && (
                            <>
                                <DateTimePicker style={{ height: 50, width: '50%', marginBottom: 14, borderRadius: 4, paddingLeft: 10, fontSize: 20, marginLeft: 4 }}
                                    value={valueDate || new Date()}
                                    mode="date"
                                    display="calendar"
                                    locale="pt"
                                    dateFormat="day month year"
                                    onChange={(event, date) => {
                                        setShowDatePicker(false);
                                        if (date) {
                                            setValuedate(date);
                                        }
                                    }}
                                />

                            </>
                        )}






                    </ConteinerInput>

                    <ConteinerInput>

                        <SelectDropdown 
                            data={tipo}
                            onSelect={(selectedItem, index) => setValueAccount_type(selectedItem)}
                            buttonTextAfterSelection={(selectedItem, index) => selectedItem}
                            rowTextForSelection={(item, index) => item}
                            defaultValueByIndex={0} // Set the default value (index) here
                            buttonStyle={{ height: 50, width: '50%', backgroundColor: '#FFF', marginBottom: 14, borderRadius: 4, paddingLeft: 10, fontSize: 17, flexDirection: 'row', alignItems: 'center' }}
                            dropdownStyle={{ height: 'auto' }} // Adjust dropdown style as needed
                            renderCustomizedButtonChild={(selectedItem, index) => (
                                <>
                                    <Text style={{ fontSize:17, color: '#000000',flexDirection:"row", marginRight:20}}>
                                        {valueAccount_type ? valueAccount_type : 'Tipo de conta'}
                                           <Ionicons name="chevron-down" size={20} color="#555" style={{ marginLeft: 30 ,flexDirection:"row" }} />
                                    </Text>
                                
                                   
                                </>
                            )}
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
        </TouchableWithoutFeedback >
    )
}