import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'
import NavbarComponent from './navbar'


const _layout = () => {
    return (
        <View style={styles.wrapper}>
            <Slot />
            <NavbarComponent />
        </View>

    )
}

export default _layout

const styles = StyleSheet.create({
    wrapper: {
        flex: 1, // Allows content to expand to fill available space
        backgroundColor: '#fff',
    },
})