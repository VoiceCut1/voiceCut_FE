import React, {useEffect} from 'react';
import MainPage from './screens/main';
import {PERMISSIONS, requestMultiple} from 'react-native-permissions';
import SplashPage from './screens/splash';

function App(): React.JSX.Element {
  useEffect(() => {
    requestMultiple([
      PERMISSIONS.ANDROID.READ_CONTACTS,
      PERMISSIONS.ANDROID.RECORD_AUDIO,
    ]);
  }, []);

  return (
    <>
      {/* <SplashPage /> */}
      <MainPage />
    </>
  );
}
export default App;
