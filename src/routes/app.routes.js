import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import New from '../pages/New';
import Profile from '../pages/Profile';
import Historic from '../pages/Historic';
import CustomDrawer from "../components/CustomDrawer";

const AppDrawer = createDrawerNavigator();

function AppRoutes() {
    return (
        <AppDrawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,

                drawerStyle: {
                    backgroundColor: '#FFF',
                    paddingTop: 20,
                },

                drawerActiveBackgroundColor: '#2E8B57', // cor em volta
                drawerActiveTintColor: '#FFF', //cor da letra de dentro 

                drawerInactiveBackgroundColor: '#F0F2FF', //inativos
                drawerInactiveTintColor: '#121212'

            }}

        >
            <AppDrawer.Screen
                name="Home"
                component={Home}
            />

            <AppDrawer.Screen
                name="Registrar"
                component={New} />

            <AppDrawer.Screen
                name="Historico"
                component={Historic} />

            <AppDrawer.Screen
                name="Perfil"
                component={Profile}
            />

        </AppDrawer.Navigator>
    )
}

export default AppRoutes;
