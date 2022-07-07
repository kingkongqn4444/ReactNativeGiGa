import React from 'react';
import {DetailTrip, ListTrips} from './screens';

import {createStackNavigator} from '@react-navigation/stack';
const HomeStack = createStackNavigator();

// home stacks
function HomeStackScreen({}) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="ListTrips" component={ListTrips} />
      <HomeStack.Screen name="DetailTrip" component={DetailTrip} />
    </HomeStack.Navigator>
  );
}

const RootStack = createStackNavigator();
const RootStackScreen = () => {
  return (
    <>
      <RootStack.Navigator headerMode="none">
        <RootStack.Screen name="HomeStackScreen" component={HomeStackScreen} />
      </RootStack.Navigator>
    </>
  );
};

export default RootStackScreen;
