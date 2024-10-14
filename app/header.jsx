import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HeaderComponent = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Financial Management</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        padding: 20,
        backgroundColor: '#fff',
        elevation: 3, // Shadow effect for Android
        shadowColor: '#000', // Shadow color for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default HeaderComponent;
