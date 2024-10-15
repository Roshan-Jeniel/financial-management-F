import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { groupData } from "../../db/mockData";
import { StyleSheet, Text } from "react-native";


const GroupList = ({navigation, setGroupId }) => {
    const handleGroupPress = (groupId) => {
        console.log("Navigating to GroupDetails with groupId:", groupId);
        setGroupId(groupId);
        navigation.navigate('groupDetails');
    };

    const renderGroup = ({ item }) => (
        <TouchableOpacity style={styles.box} onPress={() => handleGroupPress(item.id)}>
            <Text style={styles.boxTitle}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <FlatList
            data={groupData}
            renderItem={renderGroup}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.GroupslistContainer}
            showsVerticalScrollIndicator={false}
            scrollEnabled={true} // Allow scrolling
            style={styles.groupscrollableList} // Define the scrollable area
        />
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
        maxHeight: 350, // Limit the height of the scrollable list (adjust this value)
    }
});

export default GroupList;