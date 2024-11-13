import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import FontText from './fontText';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {StackParamList} from '../constans/interface'; // 페이지 이동을 위한 인터페이스 불러오기

const LargeButton: React.FC = () => {
  const navigation = useNavigation<NavigationProp<StackParamList>>();

  const handlePress = () => {
    navigation.navigate('NokListPage'); // NokListPage로 이동
  };

  return (
    <TouchableOpacity style={styles.addButton} onPress={handlePress}>
      <FontText size={35} color="black">
        번호{'\n'}등록하기
      </FontText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addButton: {
    flex: 1,
    width: '90%',
    borderWidth: 7,
    borderColor: '#F68E5F',
    borderStyle: 'dotted',
    borderRadius: 5,
    marginTop: '5%',
    padding: '3%',
  },
});

export default LargeButton;
