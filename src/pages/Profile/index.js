import React, { useContext } from "react";

import { Container, Message, Name, LogoutButton, LogoutText, Logo , Textlabel, Textinfo} from './styles'

import Header from '../../components/Header'
import { AuthContext } from "../../contexts/auth";
import { FontAwesome, Zocial, Entypo} from '@expo/vector-icons';


export default function Profile() {
    const { user, signOut } = useContext(AuthContext)

    return (

        <Container>

            <Header title="Meu perfil" />

            <Logo>
                <FontAwesome name="user-circle" size={120} color="black" />
            </Logo>

      <Textlabel >
      <FontAwesome name="user" size={35} color="black" />
             <Name numberOflines={1}>
             
                    {user && user.name}
                </Name>

      </Textlabel>

      <Textlabel >
      <Zocial name="email" size={35} color="black" />
      <Name numberOflines={1}> {user && user.email}
      </Name>
      </Textlabel>

      <Textlabel >
      <Entypo name="lock" size={35} color="black" />
      <Textinfo >  Senha</Textinfo>
      </Textlabel>



            <LogoutButton onPress={() => signOut()}>
                <LogoutText>Sair</LogoutText>
            </LogoutButton>

        </Container>


    )
}