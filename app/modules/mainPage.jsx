
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { groupData, peopleData } from '../../db/mockData';

export default function ProfileScreen() {
    const [amount, setAmount] = useState('');
    const [group, setGroup] = useState('');
    const [comment, setComment] = useState('');
    const [peopleSelections, setPeopleSelections] = useState([]);
    //Handling Reset button to clear all data
    const handleReset = () => {
        setAmount('');
        setGroup('');
        setComment('');
        setPeopleSelections([]);
    };
    //Handling Submit button
    const handleSubmit = () => {
        if(validateData()) {
            console.log('Submitted:', { amount, group, comment, peopleSelections });
            handleReset();
        }
        
    };
    //Validating the data before submitting
    const validateData = () => {
        
        let isValid = true
        if(amount==="") {
            alert("Please fill the Amount");
            isValid = false
        }
        if(isValid && peopleSelections.find((people => people.person === ''))) {
            alert("Update people selection")
            isValid = false
        }
        if( isValid && peopleSelections.find((people => people.amount === ''))) {
            alert("Fill amount for selected people")
            isValid = false
        }
        return isValid
    }
    //Adding people section
    const addPeopleSelection = () => {
        setPeopleSelections(peopleList => [...peopleList, { id: Date.now, person: '', amount: '' }]);
    };
    //Handling data once add people is inititated
    const handlePersonChange = (selectedValue, index) => {
        const updatedSelections = [...peopleSelections];
        updatedSelections[index].person = peopleData[selectedValue-1].name
        updatedSelections[index].id = peopleData[selectedValue-1].id
        setPeopleSelections(updatedSelections);
    };
    //Handling amount once add people is initiated
    const handleAmountChange = (text, index) => {
        const updatedSelections = [...peopleSelections];
        updatedSelections[index].amount = text; 
        setPeopleSelections(updatedSelections);
    };
    return (
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
                                    selectedValue={selection.id}
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
                                placeholder="Amount ₹"
                                keyboardType="numeric"
                                value={selection.amount}
                                onChangeText={(text) => handleAmountChange(text, index)}
                                style={styles.peopleAmountContainer}
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
    peopleAmountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginLeft: 2,
        marginBottom: 20,
        padding: 10
    },
    dollarSign: {
        padding: 10,
    },
    amountInput: {
        flex: 1,
        padding: 10,
    },
    pickerContainer: {
        flex:4,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 20,
    },
    selectionContainer: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 5, // Added margin for better spacing
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
