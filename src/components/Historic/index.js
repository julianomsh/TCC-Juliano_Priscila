import React from 'react';
import {
    Container,
    TipoText,
    Tipo,
    IconView,
    ValorText,
    Descricao,
    Data,
    Status,
    TipoConta,
    Observacao,
    ConteinerInput
} from './styles';
import { TouchableWithoutFeedback, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function HistoricoList({ data, deleteItem }) {

    function handleDeleteItem() {
        Alert.alert(
            'Atenção',
            'Tem certeza que deseja deletar esse registro?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Continuar',
                    onPress: () => deleteItem(data.id)
                }
            ]
        )
    }

    return (

        
        <TouchableWithoutFeedback onLongPress={handleDeleteItem}>
            <Container>

                <Tipo>
                    <IconView tipo={data.type}>
                        <Icon
                            name={data.type === 'despesa' ? 'arrow-down' : 'arrow-up'}
                            size={20}
                            color="#FFF"
                        />
                        <TipoText>{data.type}</TipoText>
                    </IconView>
                </Tipo>       
                <Data>
                    {data.date}
                </Data>

                <Descricao>
                    {data.description}
                </Descricao>

                <ConteinerInput>
                    <TipoConta>
                        {data.account_type} - 
                    </TipoConta>

                    <Status>
                        {data.status}
                    </Status>
                </ConteinerInput>


                <ValorText>
                    R$ {data.value}
                </ValorText>

                <Observacao>
                    Obs. {data.observation}
                </Observacao>

            </Container>
        </TouchableWithoutFeedback>
    )
}