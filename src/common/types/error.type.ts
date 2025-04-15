export type DefaultErrorHandler = {
  [key: number]: () => void;
} & {
  default: () => void;
};

export type ErrorHandler = Partial<DefaultErrorHandler>;
