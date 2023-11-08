import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import RedPassword from '../pages/RedPassword'



const AuthStack = createNativeStackNavigator();


function AuthRoutes() {

    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="SignIn"
                component={SignIn}
                options={{
                    headerShown:false,
                }}
            />
            <AuthStack.Screen
                name="SignUp"
                component={SignUp}
                options={{
                    hearderStyle:{
                    backgroundColor: '#2E8B57',
                    borderBottomWidth:1,
                    boderBottomColor:'#F4F6F5'
                },
                headerTintColor:'black',
                headerTitle: 'Voltar',
                headerBackTitleVisible: false,
            }}
            />

            <AuthStack.Screen
                name="RedPassword"
                component={RedPassword}
                options={{
                    hearderStyle:{
                    backgroundColor: '#2E8B57',
                    borderBottomWidth:1,
                    boderBottomColor:'#F4F6F5'
                },
                headerTintColor:'black',
                headerTitle: 'Voltar',
                headerBackTitleVisible: false,
            }}
            />

        </AuthStack.Navigator>

    )


}

export default AuthRoutes;