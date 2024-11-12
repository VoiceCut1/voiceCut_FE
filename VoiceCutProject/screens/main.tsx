import {StyleSheet, Text, View, ScrollView} from 'react-native';
import LargeButton from '../components/largeButton';
import NumberList from '../components/numberList';
import FontText from '../components/fontText';

const MainPage = () => {
  //나중에 async-storage 사용해서 등록된 번호 데이터 여기서 불러오기
  // 1. 데이터가 불러와지는 동안 스플래시 화면 띄우기
  // 2. 데이터 확인 후 등록된 연락처가 1개 미만이면 noNumber 화면 띄우기

  // 테스트용
  const dataLength = 1;

  return (
    <View style={styles.container}>
      {/* 탐지중일때 텍스트 */}
      <FontText size={40}>
        현재 보이스피싱 {'\n'}
        <Text style={styles.orangeText}>탐지중</Text>
        입니다
        {'\n'}
      </FontText>
      {/* 탐지중일때 텍스트 */}

      {dataLength < 1 ? (
        <View style={styles.whiteBox}>
          <FontText size={40} color="#324376">
            등록된 번호가{'\n'}
            <Text style={{color: '#F68E5F'}}>아직</Text> 없습니다!
          </FontText>
          <LargeButton />
        </View>
      ) : (
        <View style={styles.whiteBox}>
          <FontText size={35} color="#324376">
            등록된 번호는{' '}
          </FontText>
          <NumberList />
          <FontText size={35} color="#324376">
            입니다
          </FontText>
          <LargeButton />
        </View>
      )}
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
