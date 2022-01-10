import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MoviesNavigator from './navigation/MoviesNavigator';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <MoviesNavigator />
    </NavigationContainer>
  );
};

export default App;
