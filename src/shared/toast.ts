/**
 * @Author: Anandp
 * @Date:   2023-09-23 03:40:53
 * @Last Modified by:   Anandp
 * @Last Modified time: 2023-09-23 03:41:02
 */
import { Alert, Platform, ToastAndroid } from 'react-native';

export const Toast = (text: any, duration: number) => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(text, duration === 0 ? ToastAndroid.SHORT : ToastAndroid.LONG);
  } else {
    Alert.alert(text);
  }
};