export enum MessageType {
  Success = 'success',
  Error = 'error',
  Info = 'info',
}

export interface FBToastViewProps {
  fadeAnim: any;
  animatedValue: any;
  type: MessageType;
  headerText: string;
  descriptionText: string;
  setShowToastView: any;
  toastDirectionFromTop: boolean;
}
