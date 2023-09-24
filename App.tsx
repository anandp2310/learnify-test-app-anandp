import * as React from 'react';
import StackNavigator from './src/route/StackNavigator/StackNavigator';
import { StyleSheet, Text, View } from 'react-native';
import { ColorTheme } from './src/shared/Colors';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <StatusBar
          hidden={false}
          animated={true}
          barStyle='light-content'
          backgroundColor={ColorTheme(1)}
        />
        <StackNavigator />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
