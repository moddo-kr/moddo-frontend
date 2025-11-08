export type DefaultErrorHandlers = {
  [key: number]: () => void;
} & {
  default: () => void;
};

export type ErrorHandlers = Partial<DefaultErrorHandlers>;

export type IgnoreBoundaryErrors = number[];

export class BoundaryError extends Error {
  title?: string;

  description?: string;

  action?: {
    text?: string;
    href?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onClick?: (arg: any) => void;
  };

  constructor({
    message,
    title,
    description,
    action,
  }: {
    message?: string;
    title?: string;
    description?: string;
    action?: {
      text?: string;
      href?: string;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onClick?: (arg: any) => void;
    };
  }) {
    super(message);
    this.name = 'BoundaryError';
    this.title = title;
    this.description = description;
    this.action = action;
  }
}
