export type DefaultErrorHandlers = {
  [key: number]: () => void;
} & {
  default: () => void;
};

export type ErrorHandlers = Partial<DefaultErrorHandlers>;

export type NoBoundaryErrors = number[];
