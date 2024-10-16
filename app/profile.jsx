import React, { useState } from 'react';
import { Image, View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { tableData } from '../db/mockData';
import { Table, Row, Rows } from 'react-native-table-component';
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderComponent from '../components/header';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const ProfileScreen = () => {

    const [data, setData] = useState(tableData);

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <HeaderComponent />
                <View style={styles.wrapper}>
                    <ScrollView>
                        <View style={{ alignItems: 'center' }}>
                            <Image
                                style={{ width: 100, height: 100 }}  // required Dimensions and styling of Image
                                source={require('../assets/images/avatar.png')} // enter your avatar image path 
                            />
                            <Text style={styles.profileName}>Monkey D Luffy</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 50, paddingTop: 30 }}>
                            <View>
                                <Text style={styles.textStyles}>CREDIT</Text>
                                <Text style={styles.creditStyle}>+1500</Text>
                            </View>

                            <View>
                                <Text style={styles.textStyles}>DEBIT</Text>
                                <Text style={styles.debitStyle}>-200</Text>
                            </View>
                        </View>

                        <View style={styles.container}>
                            <Text style={styles.textStyles}>Last recent transaction :</Text>
                            <Table borderStyle={{ borderWidth: 2, borderColor: 'black' }}>
                                <Row
                                    data={data.tableHead}
                                    style={styles.head}
                                    textStyle={Array.isArray(styles.headText) ? StyleSheet.flatten(styles.headText) : styles.headText}
                                />
                                <Rows
                                    data={data.tableData}
                                    textStyle={Array.isArray(styles.text) ? StyleSheet.flatten(styles.text) : styles.text}
                                />
                            </Table>

                            <View style={{ paddingTop: 20 }} >
                                <TouchableOpacity >
                                    <Text style={[styles.textStyles, styles.profileBtn]}>Profile Settings</Text>
                                </TouchableOpacity>

                                <TouchableOpacity >
                                    <Text style={[styles.textStyles, styles.profileBtn]}>Reset Account</Text>
                                </TouchableOpacity>
                            </View>
                        </View>


                    </ScrollView>
                </View>
            </SafeAreaView>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1, // Allows content to expand to fill available space
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        padding: 20
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
    profileName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },
    textStyles: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    creditStyle: {
        fontSize: 18,
        color: 'green',
        padding: 5
    },
    debitStyle: {
        fontSize: 18,
        color: 'red',
        padding: 5
    },
    head:
    {
        height: 44,
        backgroundColor: 'green'
    },
    headText:
    {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black'
    },
    text:
    {
        margin: 5,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    profileBtn: {
        paddingTop: 20
    }
});

export default ProfileScreen;

