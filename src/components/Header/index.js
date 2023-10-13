import React from "react";
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
        </Container>
    )
}