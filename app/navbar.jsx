import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useRouter, usePathname } from 'expo-router';  // Import usePathname
import { Ionicons } from '@expo/vector-icons';

const Navbar = () => {
    const router = useRouter();  
    const pathname = usePathname(); 

    const isActive = (route) => pathname === route;

    return (
        <View style={styles.navbar}>
            <TouchableOpacity 
                style={styles.navItem} 
                onPress={() => router.push('/')}>

                <Ionicons 
                    name="home" 
                    size={24} 
                    color={isActive('/') ? 'black' : '#8B4513'}  // Black if active, brown if not
                />
                <Text style={{ color: isActive('/') ? 'black' : '#8B4513' }}>HOME</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.navItem} 
                onPress={() => router.push('/people')}>

                <Ionicons 
                    name="people" 
                    size={24} 
                    color={isActive('/people') ? 'black' : '#8B4513'}  // Black if active, brown if not
                />
                <Text style={{ color: isActive('/people') ? 'black' : '#8B4513' }}>People</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.navItem} 
                onPress={() => router.push('/profile')}>

                <Ionicons 
                    name="person" 
                    size={24} 
                    color={isActive('/profile') ? 'black' : '#8B4513'}  // Black if active, brown if not
                />
                <Text style={{ color: isActive('/profile') ? 'black' : '#8B4513' }}>Profile</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Navbar;

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        paddingTop: 10,
        paddingBottom: 20,
        backgroundColor: '#f8f8f8',
    },
    navItem: {
        alignItems: 'center',
    },
});
