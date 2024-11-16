import RNCallKeep from 'react-native-callkeep';
import {PermissionsAndroid} from 'react-native';
import {startRecording, stopRecording} from './audioRecorder';

// RNCallKeep를 초기화하고 전화 관련 이벤트를 처리하는 함수
export const setupCallKeep = async () => {
  // RNCallKeep 설정 옵션 정의 : 깃허브에 이렇게 나와있음
  const options = {
    ios: {
      appName: 'VoiceCut',
    },
    android: {
      alertTitle: '권한이 필요합니다.', // 권한 요청 팝업 제목
      alertDescription: '이 앱은 전화 계정에 접근하기 위한 권한이 필요합니다.', // 권한 요청 팝업 설명문
      cancelButton: '취소',
      okButton: '확인',
      additionalPermissions: [
        // 추가로 요청할 Android 권한
        PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE, // 전화 상태 읽기 권한
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO, // 오디오 녹음 권한
      ],
      foregroundService: {
        // Android Foreground 서비스 설정, 벡그라운드 실행 설정임
        channelId: 'com.voicecut',
        channelName: '전화대장군 서비스',
        notificationTitle: '전화대장군 실행 중', // 알림 제목
      },
      selfManaged: true, // Self-Managed 모드 활성화, 일단 필요하다고 해서 넣어둠
    },
  };

  try {
    // RNCallKeep 초기화
    await RNCallKeep.setup(options);
    console.log('RNCallKeep setup successful');

    // 전화 수신 이벤트 핸들러 등록
    RNCallKeep.addEventListener('answerCall', async data => {
      console.log('Call answered:', data); // 전화 수신 시 호출됨
      await startRecording(); // 전화 수신 시 녹음 시작
    });

    // 전화 종료 이벤트 핸들러 등록
    RNCallKeep.addEventListener('endCall', async data => {
      console.log('Call ended:', data); // 전화 종료 시 호출됨
      await stopRecording(); // 전화 종료 시 녹음 중단
    });
  } catch (error) {
    // 오류 처리
    if (error instanceof Error) {
      // error는 이제 Error 타입으로 간주됩니다.
      if (error.message?.includes('BIND_TELECOM_CONNECTION_SERVICE')) {
        console.warn(
          'PhoneAccount registration skipped due to BIND_TELECOM_CONNECTION_SERVICE restriction.',
        );
      } else {
        console.error('RNCallKeep initialization error:', error);
      }
    } else {
      // 예상치 못한 오류 처리
      console.error('Unknown error occurred:', error);
    }
  }
};
