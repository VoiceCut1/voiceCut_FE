import {StyleSheet, Text, View, ScrollView} from 'react-native';
import LargeButton from '../components/largeButton';
import NumberList from '../components/numberList';
import FontText from '../components/fontText';

const MainPage = () => {
  return (
    <View style={styles.container}>
      {/* 탐지중일때 텍스트 */}
      <FontText size={45}>
        현재 보이스피싱 {'\n'}
        <Text style={styles.orangeText}>탐지중</Text>
        입니다
        {'\n'}
      </FontText>
      {/* 탐지중일때 텍스트 */}
      <View style={styles.whiteBox}>
        <FontText size={45} color="#324376">
          등록된 번호는{' '}
        </FontText>
        <NumberList />
        <FontText size={45} color="#324376">
          입니다
        </FontText>
        <LargeButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7EE7F',
    paddingTop: '5%',
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

// 카페 24 써라운드
// 우아한형제들
// 런드리 고딕
// 여기어때 잘난체
