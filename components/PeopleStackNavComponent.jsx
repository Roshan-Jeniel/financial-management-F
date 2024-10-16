import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import GroupDetails from '../app/modules/groupDetails';
import GroupList from '../app/modules/groupList';

export default function PeopleStackNavComponent() {

    const Stack = createStackNavigator();
    const [groupId, setGroupId] = useState(null);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Stack.Navigator initialRouteName="groupList" >
                <Stack.Screen name="groupList" options={{ headerShown: false }}> 
                    {(props) => <GroupList {...props} setGroupId={setGroupId}  />}
                </Stack.Screen>
                <Stack.Screen name="groupDetails" options={{ headerShown: false }}>
                    {(props) => <GroupDetails {...props} groupId={groupId} />}
                </Stack.Screen>
            </Stack.Navigator>
        </SafeAreaView>
    );
}
