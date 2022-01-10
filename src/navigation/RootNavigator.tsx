import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import HomeNavigator from './HomeNavigator';

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
