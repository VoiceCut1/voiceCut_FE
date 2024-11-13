import {View, StyleSheet, Text, Image} from 'react-native';
import FontText from '../components/fontText';
import NumberList from '../components/numberList';

const MainPage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/img/shield.png')}
        style={styles.image}
      />
      <FontText size={40}>
        보이스피싱{'\n'}
        <Text style={styles.orangeText}>탐지중</Text>
      </FontText>

      <View style={styles.whiteBox}>
        <FontText size={35} color="#324376">
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
    position: 'relative',
    paddingTop: '25%',
  },
  orangeText: {
    color: '#F68E5F',
  },
  whiteBox: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: '15%',
    margin: 10,
    padding: '3%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '50%',
    height: '30%',
    position: 'absolute',
    left: '25%',
    top: '5%',
  },
});

export default MainPage;
