import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComponent from './header';

const groupData = [
    { id: '1', title: 'GROUP 1', description: 'Description for GROUP 1' },
    { id: '2', title: 'GROUP 2', description: 'Default sub text' },
    { id: '3', title: 'GROUP 3', description: 'Default sub text' },
    { id: '4', title: 'GROUP 4', description: 'Default sub text' }
];

const peopleData = [
    { id: '1', title: 'PERSON 1', description: 'Details about PERSON 1' },
    { id: '2', title: 'PERSON 1', description: 'Additional information' },
    { id: '3', title: 'PERSON 1', description: 'Additional information' },
    { id: '4', title: 'PERSON 1', description: 'Details about PERSON 1' },
    { id: '5', title: 'PERSON 1', description: 'Additional information' },
    { id: '6', title: 'PERSON 1', description: 'Additional information' },
];

const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.box}>
        <Text style={styles.boxTitle}>{item.title}</Text>
        <Text style={styles.boxDescription}>{item.description}</Text>
    </TouchableOpacity>
);

const PeopleScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HeaderComponent />

            <View style={styles.container}>
                {/* "Groups" Heading (Fixed) */}
                <View style={styles.headerRow}>
                    <Text style={styles.title}>Groups</Text>
                    <Text style={styles.addGroupText}>+Add group</Text>
                </View>

                {/* Scrollable Group List */}
                <FlatList
                    data={groupData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.GroupslistContainer}
                    initialNumToRender={3} // Render 3 items initially
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={true} // Allow scrolling
                    style={styles.groupscrollableList} // Define the scrollable area
                />

                {/* "Peoples" Heading (Fixed) */}
                <View style={styles.peopleheaderRow}>
                    <Text style={styles.title}>Peoples</Text>
                    <Text style={styles.addGroupText}>+Add People</Text>
                </View>

                {/* Scrollable People List */}
                <FlatList
                    data={peopleData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.PeopleslistContainer}
                    scrollEnabled={true} // Allow scrolling
                    style={styles.peoplescrollableList} // Define the scrollable area
                />
            </View>
        </SafeAreaView>
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
    GroupslistContainer: {
        paddingBottom: 20,
    },
    PeopleslistContainer: {
        paddingBottom: 20,
    },
    box: {
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        elevation: 2, // For Android shadow
        shadowColor: '#000', // Shadow color for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    boxTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    boxDescription: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: 'white',
        zIndex: 10, // Ensures the header stays on top
    },
    peopleheaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: 'white',
        zIndex: 10, // Ensures the header stays on top
    },
    addGroupText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'blue',
    },
    groupscrollableList: {
        maxHeight: 250, // Limit the height of the scrollable list (adjust this value)
    },
    peoplescrollableList: {
        maxHeight: 350,
   },
});

export default PeopleScreen;
