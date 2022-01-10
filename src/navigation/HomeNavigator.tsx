import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AllMoviesScreen from '../screens/AllMoviesScreen';

const Tab = createBottomTabNavigator();

const HomeNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="All Movies" component={AllMoviesScreen} />
      <Tab.Screen name="My Movies" component={AllMoviesScreen} />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
