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
