export interface IErrorContext {
  openError: (errorMessage: string) => void;
  errorMessage: string;
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}
