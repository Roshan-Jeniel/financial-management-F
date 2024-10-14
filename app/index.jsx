import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComponent from '../components/header';
import { groupData, peopleData } from '../db/mockData';

export default function ProfileScreen() {
    const [amount, setAmount] = useState('');
    const [group, setGroup] = useState('');
    const [comment, setComment] = useState('');
    const [peopleSelections, setPeopleSelections] = useState([]);

    const handleReset = () => {
        setAmount('');
        setGroup('');
        setComment('');
        setPeopleSelections([]); // Reset people selections
    };

    const handleSubmit = () => {
        // Handle form submission logic here
        console.log('Submitted:', { amount, group, comment, peopleSelections });
    };

    const addPeopleSelection = () => {
        setPeopleSelections([...peopleSelections, { id: '', person: '', amount: '' }]);
    };

    const handlePersonChange = (selectedValue, index) => {
        const updatedSelections = [...peopleSelections];
        updatedSelections[index].value = selectedValue;
        updatedSelections[index].person = peopleData[selectedValue].name
        updatedSelections[index].id = peopleData[selectedValue].id
        setPeopleSelections(updatedSelections);
    };

    const handleAmountChange = (text, index) => {
        const updatedSelections = [...peopleSelections];
        updatedSelections[index].amount = text; // Update amount based on the index
        setPeopleSelections(updatedSelections);
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
                            {/* Render the groups dynamically */}
                            <Picker.Item label="Select a group" value="" />
                            {groupData.map((groupItem) => (
                                <Picker.Item
                                    key={groupItem.id}
                                    label={groupItem.title}
                                    value={groupItem.id}
                                />
                            ))}
                        </Picker>
                    </View>

                    <View>
                
                    <TouchableOpacity style={styles.addPeopleButton} onPress={addPeopleSelection}>
                        <Text style={styles.addPeopleButtonText}>+ Add People</Text>
                    </TouchableOpacity>

                    {peopleSelections.map((selection, index) => (
                        <View key={selection.id} style={styles.selectionContainer}>
                            <View style={styles.pickerContainer}>
                                <Picker
                                    selectedValue={selection.value}
                                    onValueChange={(itemValue) => handlePersonChange(itemValue, index)}
                                    style={styles.picker}
                                >
                                    <Picker.Item label="Select a person" value="" />
                                    {peopleData.map((value) => (
                                        <Picker.Item
                                            key={value.id}
                                            label={value.name}
                                            value={value.id}
                                        />
                                    ))}
                                </Picker>
                            </View>
                            <TextInput
                                placeholder="Enter amount"
                                keyboardType="numeric"
                                value={selection.amount}
                                onChangeText={(text) => handleAmountChange(text, index)}
                                style={styles.amountInput}
                            />
                        </View>
                    ))}
                    </View>

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
    selectionContainer: {
        marginBottom: 20, // Added margin for better spacing
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
