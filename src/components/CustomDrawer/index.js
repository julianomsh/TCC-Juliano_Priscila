import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { DrawerItemList, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { AuthContext } from '../../contexts/auth';
import { Background } from '../../pages/SignIn/styles';


export default function CustomDrawer(props){
    const { user, signOut } = useContext(AuthContext); 

    return(
        <DrawerContentScrollView {...props}>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 25 }}>
                <Image
                    source={require('../../assets/LogoTcc.png')}
                    style={{ width: 90, height: 90 }}
                    resizeMode='contain'
                />

                <Text style={{ fontSize: 18, marginTop: 14 }}>
                    Bem-vindo(a), 
                </Text>

                <Text 
                    style={{ fontSize: 17, fontWeight: 'bold', marginBottom: 14, paddingHorizontal: 20 }}
                    numberOfLines={1}
                >
                    {user && user.name}!
                </Text>    
                               
            </View>

            <DrawerItemList {...props} />

            <DrawerItem style={{backgroundColor: '#F0F2FF', fontWeight:'bold', color:'black'}}
                {...props}
                label="Sair"
                onPress={ () => signOut() }                
            />

               
            </DrawerContentScrollView>


        
    )
}