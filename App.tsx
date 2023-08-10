// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {FormNavigator} from './src/navigation';

function App() {
  return (
    <NavigationContainer>
      <FormNavigator />
    </NavigationContainer>
  );
}

export default App;
