import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import New from '../pages/New';

import Profile from '../pages/Profile'

const AppDrawer = createDrawerNavigator();

function AppRoutes() {
    return (
        <AppDrawer.Navigator
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
<<<<<<< HEAD

            <AppDrawer.Screen
                name="Registrar"
                component={New}
=======
            <AppDrawer.Screen 
                name="Perfil"
                component={Profile}
>>>>>>> b83adc3be09f6319cb550488eef82d960f360d1a
            />
        </AppDrawer.Navigator>
    )
}

export default AppRoutes;
