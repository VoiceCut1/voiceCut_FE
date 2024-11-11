import {Button, StyleSheet, Text, View, ScrollView} from 'react-native';
import LargeButton from '../components/largeButton';
import NumberList from '../components/numberList';

const MainPage = () => {
  return (
    <View style={styles.container}>
      {/* 탐지중일때 텍스트 */}
      <Text style={styles.textStyle}>현재 보이스피싱 </Text>
      <Text style={styles.textStyle}>
        <Text style={styles.orangeText}>탐지중</Text>
        입니다
      </Text>
      {/* 탐지중일때 텍스트 */}
      <View style={styles.whiteBox}>
        <Text style={styles.textStyle}>등록된 번호는 </Text>
        {/* <ScrollView style={styles.numberBox}>
          <Text style={{color: 'white'}}>
            등록된 번호 컴포넌트 리스트 만들어 넣기
          </Text>
        </ScrollView> */}
        <NumberList />
        <Text style={styles.textStyle}>입니다</Text>
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
  textStyle: {
    fontSize: 48,
    textAlign: 'center',
    color: '#324376',
  },
  orangeText: {
    color: '#F68E5F',
  },
  whiteBox: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: ' 10',
  },
  numberBox: {
    backgroundColor: '#424376',
    width: '90%',
    height: '25%',
  },
});

export default MainPage;
