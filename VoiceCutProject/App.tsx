import React, {useEffect} from 'react';
import {PERMISSIONS, requestMultiple} from 'react-native-permissions';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainPage from './screens/main';
import {StackParamList} from './constans/interface';

const Stack = createStackNavigator<StackParamList>();

function App(): React.JSX.Element {
  useEffect(() => {
    requestMultiple([
      PERMISSIONS.ANDROID.READ_CONTACTS,
      PERMISSIONS.ANDROID.RECORD_AUDIO,
    ]);
  }, []);

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
