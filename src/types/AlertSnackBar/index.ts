export enum AlertSeverity {
  success = "success",
  error = "error",
  warning = "warning",
  info = "info",
}

export interface SnackbarProps extends AlertData {
  closeAlert: () => void;
}

export interface AlertData {
  message: string;
  open: boolean;
  severity?: AlertSeverity;
}

export interface IAlertContext {
  alertData: AlertData;
  showAlert: (alertData: AlertData) => void;
  closeAlert: () => void;
}
