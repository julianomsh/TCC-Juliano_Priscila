import React , {useMemo} from "react";
import { Container, Conteiner2, Label, Balance} from './styles'



export default function BalanceItem({ data }) {

const labelName = useMemo(() => {
    if(data.tag === 'saldo'){
        return{
            label:'Saldo Atual',
            color:'3b3dbf'
        }
    }else if(data.tag === 'receita'){
        return{
            label:'Entradas De Hoje',
            color:'00b94a'
        }
    }else{
        return{
            label:'Saidas De Hoje',
            color:'EF463a'
        }
    }

}, [data])

    return (
        <Container>
            <Conteiner2 bg={labelName.color}>
            <Label>
                {labelName.label}
            </Label>
            </Conteiner2>   
            <Balance>R$ {data.saldo}</Balance>
        </Container>


    )
}