import React, { useMemo } from "react";
import { Container, Conteiner2, Label, Balance } from './styles'

export default function BalanceItem({ data }) {

  const labelName = useMemo(() => {
    if (data.tag === 'saldo') {
      return {
        label: 'Saldo Atual',
        color: '3b3dbf'
      }
    } else if (data.tag === 'receita') {
      return {
        label: 'Entradas De Hoje',
        color: '00b94a'
      }
    } else {
      return {
        label: 'Saidas De Hoje',
        color: 'EF463a'
      }
    }
  }, [data])

  // Concatenando as informações em uma única string
  const labelText = useMemo(() => {
    if (data.tag === 'saldo') {
      return `Saldo Atual: R$ ${data.saldo}`
    } else if (data.tag === 'receita') {
      return `Entradas: R$ ${data.saldo}`
    } else {
      return `Saidas: R$ ${data.saldo}`
    }
  }, [data])

  return (
    <Container>
      <Conteiner2 bg={labelName.color}>
        <Label>
          {labelText}
        </Label>
      </Conteiner2>
    </Container>
  )
}
