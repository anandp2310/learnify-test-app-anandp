import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OTPVerifyPage from '../../container/OTPVerifyPage';
import LoginPage from '../../container/LoginPage';
import { ColorTheme } from '../../shared/Colors';

const Stack = createNativeStackNavigator();

let noHeader = {
  headerShown: false,
};

let headerNoTitle = {
  headerTitle: '',
  headerShown: true,
  headerTintColor: ColorTheme(3),
  headerStyle: { backgroundColor: ColorTheme(2) },
};

let headerNoTitleNoShown = {
  headerTitle: '',
  headerShadowVisible: false,
  headerTintColor: ColorTheme(3),
  headerStyle: { backgroundColor: ColorTheme(1) },
};

let headerNoShadow = {
  headerShown: true,
  headerShadowVisible: false,
  headerTintColor: ColorTheme(5),
  headerStyle: { backgroundColor: ColorTheme(3) },
};
function MyStack() {
  return (
    <Stack.Navigator initialRouteName={'LoginPage'}>
      <Stack.Screen name="LoginPage" options={noHeader} component={LoginPage} />
      <Stack.Screen name="OTPVerifyPage" options={noHeader} component={OTPVerifyPage} />
    </Stack.Navigator>
  );
}
export default MyStack;