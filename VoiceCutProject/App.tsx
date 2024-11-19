import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainPage from './screens/main';
import {setupCallKeep} from './utils/callHandler'; // RNCallKeep 설정 함수 불러오기
import {PERMISSIONS, requestMultiple} from 'react-native-permissions';

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

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainPage"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="MainPage" component={MainPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
