import 'react-native-gesture-handler';
import {  SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/Home';
import AttractionDetails from './src/screens/AttractionDetails';

const Stack = createStackNavigator();

function App() {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
         <Stack.Navigator screenOptions={{headerShown: false}}>
           <Stack.Screen component={Home} name="Home"  />
           <Stack.Screen component={AttractionDetails} name="AttractionDetails"  />
         </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
