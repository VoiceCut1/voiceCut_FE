import {ParamListBase} from '@react-navigation/native';

export interface DataProps {
  id: number;
  name: string;
  number: string;
}

export interface ModalProps {
  visible: boolean;
}

export interface FontTextProps {
  children: React.ReactNode;
  color?: string;
  size?: number;
}
// 페이지 이동을 위한 인터페이스 정의
export interface StackParamList extends ParamListBase {
  MainPage: undefined;
  NokListPage: undefined;
}
