import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import FontText from '../components/fontText';
import NumberList from '../components/numberList';
import {startRecording, stopRecording} from '../utils/audioRecorder';

const MainPage = () => {
  const [isRecording, setIsRecording] = useState(false); // 녹음 상태 관리

  // 녹음 시작/중지 토글 함수
  const handleRecording = async () => {
    if (isRecording) {
      await stopRecording();
      setIsRecording(false);
    } else {
      await startRecording();
      setIsRecording(true);
    }
  };

  return (
    <View style={styles.container}>
      {/* 녹음 컨트롤 버튼 */}
      <TouchableOpacity style={styles.recordButton} onPress={handleRecording}>
        <Text style={styles.recordButtonText}>
          {isRecording ? '녹음 종료' : '녹음 시작'}
        </Text>
      </TouchableOpacity>

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
  recordButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#F68E5F',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  recordButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MainPage;
