import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FontText from './fontText';

const LargeButton = () => {
  return (
    <TouchableOpacity style={styles.addButton}>
      <FontText size={40} color="white">
        보호자 번호{'\n'}등록하기
      </FontText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: '#424376',
    borderRadius: 5,
    width: '70%',
    marginTop: '5%',
    padding: '3%',
  },
});

export default LargeButton;
