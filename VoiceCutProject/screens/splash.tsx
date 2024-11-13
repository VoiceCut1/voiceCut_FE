import {StyleSheet, Text, View} from 'react-native';
import FontText from '../components/fontText';

const SplashPage = () => {
  return (
    <View style={styles.container}>
      <FontText size={50} color="black">
        전화대장군
      </FontText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7EE7F',
    justifyContent: 'center',
  },
});

export default SplashPage;
