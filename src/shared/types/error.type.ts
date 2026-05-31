export type DefaultErrorHandlers = {
  [key: number]: () => void;
} & {
  default: () => void;
};

export type ErrorHandlers = Partial<DefaultErrorHandlers>;

export type IgnoreBoundaryErrors = number[];

type BoundaryErrorAction = {
  text?: string;
  href?: string;
  onClick?: () => void;
};

export class BoundaryError extends Error {
  title?: string;

  description?: string;

  action?: BoundaryErrorAction;

  constructor({
    message,
    title,
    description,
    action,
  }: {
    message?: string;
    title?: string;
    description?: string;
    action?: BoundaryErrorAction;
  }) {
    super(message);
    this.name = 'BoundaryError';
    this.title = title;
    this.description = description;
    this.action = action;
  }
}
