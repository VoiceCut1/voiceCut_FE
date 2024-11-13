import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import FontText from './fontText';

interface LargeButtonProps {
  onPress: () => void; // 버튼 클릭 시 실행할 함수
}

const LargeButton: React.FC<LargeButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.addButton} onPress={onPress}>
      <FontText size={35} color="white">
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
