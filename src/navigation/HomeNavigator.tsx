import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AllMoviesScreen from '../screens/AllMoviesScreen';

const Tab = createBottomTabNavigator();

const HomeNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="All Movies"
        component={AllMoviesScreen}
        options={{
          tabBarIcon: props => (
            <Ionicons
              {...props}
              name={props.focused ? 'film' : 'film-outline'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="My Movies"
        component={AllMoviesScreen}
        options={{
          tabBarIcon: props => (
            <Ionicons
              {...props}
              name={props.focused ? 'person' : 'person-outline'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
