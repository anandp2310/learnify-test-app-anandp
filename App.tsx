import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/route/StackNavigator/StackNavigator';
import { ColorTheme } from './src/shared/Colors';
import { NativeBaseProvider } from 'native-base';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <StatusBar hidden={false} animated={true} style="auto" backgroundColor={ColorTheme(1)} />
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
