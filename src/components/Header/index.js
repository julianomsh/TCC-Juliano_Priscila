import React from "react";
//<<<<<<< HEAD
//import Icon from 'react-native-vector-icons/Feather';
//import { useNavigation } from "@react-navigation/native";
//import { Container, Title, ButtonMenu } from "./styles";
//import Ionicons from '@expo/vector-icons/Ionicons';
//import { Entypo } from '@expo/vector-icons'; 
//<Entypo name="menu" size={24} color="black" />

import { useNavigation } from "@react-navigation/native";

import { Container, Title, ButtonMenu } from "./styles";

import { Entypo } from '@expo/vector-icons';

export default function Header({ title }) {
    const navigation = useNavigation();

    return (
        <Container>
            <ButtonMenu onPress={() => navigation.openDrawer()}>
                <Entypo name="menu" size={24} color="black" />
            </ButtonMenu>

            {title && (
                <Title>
                    {title} 
                </Title>
            )}
        </Container>//renderiza o título quando é chamado
    )
}