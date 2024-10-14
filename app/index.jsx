import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderComponent from './header';

export default function Component() {
    const [amount, setAmount] = useState('');
    const [group, setGroup] = useState('');
    const [comment, setComment] = useState('');

    const handleReset = () => {
        setAmount('');
        setGroup('');
        setComment('');
    };

    const handleSubmit = () => {
        // Handle form submission logic here
        console.log('Submitted:', { amount, group, comment });
    };

    return (

        <SafeAreaView style={{ flex: 1 }}>
        <HeaderComponent />

            <View style={styles.wrapper}>
                {/* Scrollable content */}
                <ScrollView style={styles.container}>
                    

                    <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
                        <Text style={styles.resetButtonText}>RESET</Text>
                    </TouchableOpacity>

                    <Text style={styles.label}>Amount</Text>
                    <View style={styles.amountContainer}>
                        <Text style={styles.dollarSign}>₹</Text>
                        <TextInput
                            style={styles.amountInput}
                            value={amount}
                            onChangeText={setAmount}
                            keyboardType="numeric"
                            placeholder="0.00"
                        />
                    </View>

                    <Text style={styles.label}>Group</Text>
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={group}
                            onValueChange={(itemValue) => setGroup(itemValue)}
                            style={styles.picker}
                        >
                            <Picker.Item label="Select a group" value="" />
                            <Picker.Item label="Group 1" value="group1" />
                            <Picker.Item label="Group 2" value="group2" />
                        </Picker>
                    </View>

                    <TouchableOpacity style={styles.addPeopleButton}>
                        <Text style={styles.addPeopleButtonText}>+ Add People</Text>
                    </TouchableOpacity>

                    <Text style={styles.label}>COMMENT</Text>
                    <TextInput
                        style={styles.commentInput}
                        value={comment}
                        onChangeText={setComment}
                        placeholder="Input Field"
                        multiline
                    />

                    <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                        <Text style={styles.submitButtonText}>SUBMIT</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1, // Allows content to expand to fill available space
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    resetButton: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 5,
        alignSelf: 'flex-start',
        marginBottom: 20,
    },
    resetButtonText: {
        color: '#000',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    amountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 20,
    },
    dollarSign: {
        padding: 10,
    },
    amountInput: {
        flex: 1,
        padding: 10,
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 20,
    },
    picker: {
        height: 50,
    },
    addPeopleButton: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 5,
        alignSelf: 'flex-start',
        marginBottom: 20,
    },
    addPeopleButtonText: {
        color: '#000',
    },
    commentInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        height: 100,
        marginBottom: 20,
    },
    submitButton: {
        backgroundColor: '#00a86b',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 20,
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
