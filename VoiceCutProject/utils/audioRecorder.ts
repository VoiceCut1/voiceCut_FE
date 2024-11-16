import AudioRecorderPlayer from 'react-native-audio-recorder-player';

// AudioRecorderPlayer 객체 생성
const audioRecorderPlayer = new AudioRecorderPlayer();

// 현재 녹음 파일 경로를 저장할 변수
let recordingPath: string | null = null;

/**
 * 녹음을 시작하는 함수
 */
export const startRecording = async (): Promise<void> => {
  // 저장될 녹음 파일 경로 생성 : 다운로드 폴더에 voice_현재 날짜.mp3 로 저장됨
  recordingPath = `sdcard/Download/voice_${Date.now()}.mp3`;
  // 녹음 시작
  await audioRecorderPlayer.startRecorder(recordingPath);
  console.log('녹음 시작:', recordingPath);

  // 녹음 중 진행 상태를 모니터링하기 위해 이벤트 리스너 추가
  audioRecorderPlayer.addRecordBackListener(async e => {
    // 현재 녹음 시간이 10초(10,000ms) 이상이면
    if (e.currentPosition >= 10000) {
      await stopRecording(); // 현재 녹음을 중지
      await startRecording(); // 새로운 녹음 시작
    }
  });
};
/**
 * 녹음을 중단하는 함수
 */
export const stopRecording = async (): Promise<void> => {
  if (recordingPath) {
    // 녹음 중단 및 파일 저장
    await audioRecorderPlayer.stopRecorder();
    console.log('녹음 저장됨:', recordingPath);
    // 녹음 경로 초기화 : 새롭게 파일 이름 지어주기 위함
    recordingPath = null;
  }
};
