import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComponent from '../components/header';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import friendList from './modules/friendList';
import { useState } from 'react';
import PeopleStackNavComponent from '../components/PeopleStackNavComponent';

const PeopleScreen = () => {

    const Tab = createMaterialTopTabNavigator();
    const [groupId, setGroupId] = useState(null); 
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HeaderComponent />
            {/* <NavigationContainer> */}
            <Tab.Navigator>
                <Tab.Screen name="Groups">
                    {(props) => <PeopleStackNavComponent {...props} setGroupId={setGroupId} />}
                </Tab.Screen>
                <Tab.Screen name="People" component={friendList} />
            </Tab.Navigator>
            {/* </NavigationContainer> */}
        </SafeAreaView>
    );
};

export default PeopleScreen;
