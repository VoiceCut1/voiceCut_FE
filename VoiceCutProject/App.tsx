import React, {useEffect} from 'react';
import {PERMISSIONS, requestMultiple} from 'react-native-permissions';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainPage from './screens/main';
import {Alert, Vibration} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import SplashPage from './screens/splash';
import {setupCallKeep} from './utils/callHandler'; // RNCallKeep 설정 함수 불러오기

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  useEffect(() => {
    requestMultiple([
      PERMISSIONS.ANDROID.READ_CONTACTS,
      PERMISSIONS.ANDROID.RECORD_AUDIO,
    ]);
  }, []);
  useEffect(() => {
    // RNCallKeep 초기화: 전화 수신 및 종료 이벤트를 처리하기 위해 setup 함수를 불러옴
    setupCallKeep(); // RNCallKeep 초기화
  }, []); // 컴포넌트 마운트 시 한 번 실행

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
      // 진동 패턴 : 진동 500 , 정지 250, 진동 500
      const vibrationPattern = [500, 250, 500];
      // false : 단일 반복
      Vibration.vibrate(vibrationPattern, false);

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
