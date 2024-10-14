import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const profile = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
            <View>
                <Text>profile page</Text>
            </View>
        </SafeAreaView>
  )
}

export default profile

const styles = StyleSheet.create({

    wrapper: {
        flex: 1, // Allows content to expand to fill available space
        backgroundColor: '#fff',
    },
})