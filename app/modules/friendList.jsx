import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet, Text } from "react-native";
import { peopleData } from "../../db/mockData";


const FriendList = (props) => {
    const renderPeople = ({ item }) => (
        <TouchableOpacity style={styles.box}>
            <Text style={styles.boxTitle}>{item.name}</Text>
        </TouchableOpacity>
    );
    console.log(peopleData);
   return (
        <FlatList
            data={peopleData}
            renderItem={renderPeople}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.PeopleslistContainer}
            scrollEnabled={true} // Allow scrolling
            style={styles.peoplescrollableList} // Define the scrollable area
        />
   )
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

export default FriendList;