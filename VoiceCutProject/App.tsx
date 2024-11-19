import React, {useEffect, useState} from 'react';
import {PERMISSIONS, requestMultiple} from 'react-native-permissions';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainPage from './screens/main';
import NokListPage from './screens/nokListPage';
import {StackParamList} from './constans/interface';
import {Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import SplashPage from './screens/splash';

const Stack = createStackNavigator<StackParamList>();

function App(): React.JSX.Element {
  useEffect(() => {
    requestMultiple([
      PERMISSIONS.ANDROID.READ_CONTACTS,
      PERMISSIONS.ANDROID.RECORD_AUDIO,
    ]);
  }, []);

  // FCM 토큰 발행
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const token = await messaging().getToken();
        console.log('FCM 토큰:', token);
      } catch (error) {
        console.error('FCM 토큰 가져오기 실패:', error);
      }
    };
    fetchToken();
  }, []);

  // FCM 알림
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('알림 도착!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashPage"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashPage" component={SplashPage} />
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="NokListPage" component={NokListPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
