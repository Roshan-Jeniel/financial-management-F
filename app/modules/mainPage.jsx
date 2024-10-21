import { useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { groupData, peopleData, categoryData } from "../../db/mockData";
import { Checkbox, Colors } from "react-native-ui-lib";
import uuid from 'react-native-uuid';

export default function ProfileScreen() {
    const [amount, setAmount] = useState("");
    const [group, setGroup] = useState("");
    const [comment, setComment] = useState("");
    const [peopleSelections, setPeopleSelections] = useState([]);
    const [splitEqualFlag, setSplitEqualFlag] = useState(false);
    const [category, setCategory] = useState('');
    const [transactionId, setTransactionId] = useState(uuid.v4);

    // Handling Reset button to clear all data
    const handleReset = () => {
        setAmount("");
        setGroup("");
        setComment("");
        setPeopleSelections([]);
        setSplitEqualFlag(false);
        setTransactionId(uuid.v4);
    };

    // Handling Submit button
    const handleSubmit = () => {
        if (validateData()) {
            console.log("Submitted:", { transactionId ,amount, comment, peopleSelections, splitEqualFlag });
            handleReset();
        }
    };

    // Validating the data before submitting
    const validateData = () => {
        let isValid = true;
        if (amount === "") {
            alert("Please fill the Amount");
            isValid = false;
        }
        if (isValid && peopleSelections.find((people) => people.person === "")) {
            alert("Update people selection");
            isValid = false;
        }
        if (isValid && peopleSelections.find((people) => people.amount === "")) {
            alert("Fill amount for selected people");
            isValid = false;
        }
        return isValid;
    };

    // Adding people section
    const addPeopleSelection = () => {
        setPeopleSelections((peopleList) => {
            const updatedPeople = [
                ...peopleList,
                { id: Date.now(), name: "", amount: "" , groupId: []},
            ];
    
            // Automatically uncheck split equal flag when new people are added
            setSplitEqualFlag(false);
    
            return updatedPeople;
        });
    };

    // Handling person selection change
    const handlePersonChange = (selectedValue, index) => {
        const updatedSelections = [...peopleSelections];

        const selectedPerson = peopleData.find(person => person.id === selectedValue);
        
        if (selectedPerson) {
            updatedSelections[index].name = selectedPerson.name;
            updatedSelections[index].id = selectedPerson.id;
        }
    
        setPeopleSelections(updatedSelections);
    };
    

    // Handling amount change
    const handleAmountChange = (text, index) => {
        const updatedSelections = [...peopleSelections];
        updatedSelections[index].amount = text;
        setPeopleSelections(updatedSelections);
    };

    // Handling Split Equal Logic
    const handleSplitEqual = () => {
        setSplitEqualFlag((prevFlag) => !prevFlag);
    };

    // Recalculate amounts when peopleSelections or splitEqualFlag changes
    const recalculateAmounts = (updatedPeople = peopleSelections) => {
        if (splitEqualFlag && amount !== "") {
            let totalPeople = updatedPeople.filter(
                (people) => people.person !== ""
            ).length;
            let shareAmount = (amount / (totalPeople + 1)).toFixed(2);
    
            const newSelections = updatedPeople.map((people) => ({
                ...people,
                amount: people.person !== "" ? shareAmount : "",
            }));
    
            setPeopleSelections(newSelections);
        }
    };

    useEffect(() => {
        if (splitEqualFlag) {
            recalculateAmounts();
        }
    }, [splitEqualFlag, amount]);

    return (
        <View style={styles.wrapper}>
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
                <Text style={styles.label}>Category</Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={category}
                        onValueChange={(itemValue) => setCategory(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Select a category" value="" />
                        {categoryData.map((categoryData) => (
                            <Picker.Item
                                key={categoryData.id}
                                label={categoryData.text}
                                value={categoryData.id}
                            />
                        ))}
                    </Picker>
                </View>
                <Text style={styles.label}>Group</Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={group}
                        onValueChange={(itemValue) => setGroup(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Select a group" value="" />
                        {groupData.map((groupItem) => (
                            <Picker.Item
                                key={groupItem.groupId}
                                label={groupItem.name}
                                value={groupItem.groupId}
                            />
                        ))}
                    </Picker>
                </View>
                <View>
                    <View
                        style={{ flexDirection: "row", justifyContent: "space-between" }}
                    >
                        <TouchableOpacity
                            style={styles.addPeopleButton}
                            onPress={addPeopleSelection}
                        >
                            <Text style={styles.addPeopleButtonText}>+ Add People</Text>
                        </TouchableOpacity>
                        <View style={{ paddingTop: 12 }}>
                            <Checkbox
                                value={splitEqualFlag}
                                label="Split equal"
                                color={Colors.green10}
                                iconColor={Colors.white}
                                onValueChange={handleSplitEqual}
                            />
                        </View>
                    </View>

                    {peopleSelections.map((selection, index) => (
                        <View key={selection.id} style={styles.selectionContainer}>
                            <View style={styles.pickerContainer}>
                                <Picker
                                    selectedValue={selection.id}
                                    onValueChange={(itemValue) =>
                                        handlePersonChange(itemValue, index)
                                    }
                                    style={styles.picker}
                                >
                                    <Picker.Item label="Select a person" value="" />
                                    {peopleData.map((people) => (
                                        <Picker.Item
                                            key={people.id}
                                            label={people.name}
                                            value={people.id}
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
                {/* NEEDS TO BE CHANGED TO PRESSABLE TAG */}
                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit} >
                    <Text style={styles.submitButtonText}>SUBMIT</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1, // Allows content to expand to fill available space
        backgroundColor: "#fff",
    },
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    resetButton: {
        backgroundColor: "#f0f0f0",
        padding: 10,
        borderRadius: 5,
        alignSelf: "flex-start",
        marginBottom: 20,
    },
    resetButtonText: {
        color: "#000",
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    amountContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        marginBottom: 20,
    },
    peopleAmountContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        marginLeft: 2,
        marginBottom: 20,
        padding: 10,
    },
    dollarSign: {
        padding: 10,
    },
    amountInput: {
        flex: 1,
        padding: 10,
    },
    pickerContainer: {
        flex: 4,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        marginBottom: 20,
    },
    selectionContainer: {
        flex: 1,
        flexDirection: "row",
        marginBottom: 5, // Added margin for better spacing
    },
    picker: {
        height: 50,
    },
    addPeopleButton: {
        backgroundColor: "#f0f0f0",
        padding: 10,
        borderRadius: 5,
        alignSelf: "flex-start",
        marginBottom: 20,
    },
    addPeopleButtonText: {
        color: "#000",
    },
    commentInput: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        height: 50,
        marginBottom: 20,
    },
    submitButton: {
        backgroundColor: "#00a86b",
        padding: 15,
        borderRadius: 5,
        alignItems: "center",
        marginBottom: 20,
    },
    submitButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});
