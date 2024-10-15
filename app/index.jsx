import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComponent from '../components/header';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from './modules/mainPage';

export default function ProfileScreen() {

    const Stack = createStackNavigator();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HeaderComponent />
            <Stack.Navigator initialRouteName="mainPage" >
                <Stack.Screen name="mainPage" component={MainPage} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </SafeAreaView>
    );
}
