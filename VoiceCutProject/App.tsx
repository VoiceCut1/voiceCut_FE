import React, {useEffect} from 'react';
import {PERMISSIONS, requestMultiple} from 'react-native-permissions';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainPage from './screens/main';
import NokListPage from './screens/nokListPage';
import {StackParamList} from './constans/interface';
import {Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';

const Stack = createStackNavigator<StackParamList>();

function App(): React.JSX.Element {
  useEffect(() => {
    requestMultiple([
      PERMISSIONS.ANDROID.READ_CONTACTS,
      PERMISSIONS.ANDROID.RECORD_AUDIO,
    ]);
  }, []);

  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('백그라운드에서 알림 수신 확인');
  });

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('알림 도착!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainPage"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="NokListPage" component={NokListPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
