import {StyleSheet, Text, View} from 'react-native';
import NumberList from '../components/numberList';
import FontText from '../components/fontText';

const MainPage = () => {
  return (
    <View style={styles.container}>
      {/* 탐지중일때 텍스트 */}
      <FontText size={40}>
        현재{'\n'}보이스피싱 {'\n'}
        <Text style={styles.orangeText}>탐지중</Text>
      </FontText>
      {/* 탐지중일때 텍스트 */}

      <View style={styles.whiteBox}>
        <FontText size={35} color="black">
          등록 보호자
        </FontText>
        <NumberList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: '20%',
  },
  orangeText: {
    color: '#F68E5F',
  },
  whiteBox: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    padding: '3%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainPage;
