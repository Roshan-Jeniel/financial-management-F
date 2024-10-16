import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComponent from '../components/header';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useState } from 'react';
import PeopleStackNavComponent from '../components/PeopleStackNavComponent';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import FriendList from './modules/friendList';

const PeopleScreen = () => {

    const Tab = createMaterialTopTabNavigator();
    const [groupId, setGroupId] = useState(null);
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
            <HeaderComponent />
            {/* <NavigationContainer> */}
            <Tab.Navigator>
                <Tab.Screen name="Groups">
                    {(props) => <PeopleStackNavComponent {...props} setGroupId={setGroupId} />}
                </Tab.Screen>
                <Tab.Screen name="People" component={FriendList} />
            </Tab.Navigator>
            {/* </NavigationContainer> */}
        </SafeAreaView>
        </GestureHandlerRootView>
    );
};

export default PeopleScreen;
