import React from "react";
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";
import { Container, Title, ButtonMenu } from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons';
//import { Entypo } from '@expo/vector-icons'; 
//<Entypo name="menu" size={24} color="black" />

export default function Header({ title }) {
    const navigation = useNavigation();

    return (
        <Container>
            <ButtonMenu onPress={ () => navigation.openDrawer() }>
                <Ionicons name="menu" size={35} color="#121212"/>
                
            </ButtonMenu>
            
            {title && (
                <Title>
                    {title} 
                </Title>
            )}
        </Container>//renderiza o título quando é chamado
    )
}