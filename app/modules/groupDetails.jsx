import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { groupData } from '../../db/mockData'; // Ensure this path is correct

const GroupDetails = ({groupId}) => {
    console.log('group details' + groupId)
    // Find the group details based on the groupId
    const groupDetails = groupData.find(group => group.id === groupId);
    if (!groupDetails) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Group Not Found</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{groupDetails.title}</Text>
            <Text>{groupDetails.description}</Text>
            {/* Add more details here */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#00a86b',
    },
});

export default GroupDetails;
