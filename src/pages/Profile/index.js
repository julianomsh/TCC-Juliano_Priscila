import React, {useContext} from "react";

import {Container, Message, Name, LogoutButton,LogoutText } from './styles'

import Header from '../../components/Header'
import { AuthContext } from "../../contexts/auth";


export default function Profile(){
    const {user, signOut} = useContext(AuthContext)

    return(
    
        <Container>
            <Header title="Meu perfil"/>
            <Message>
                Olá
            </Message>

            <Name numberOflines={1}>
                {user && user.name}
            </Name>
        <LogoutButton onPress={ () => signOut()}>
            <LogoutText>Sair</LogoutText>
        </LogoutButton>

        </Container>
        
        
        )
}