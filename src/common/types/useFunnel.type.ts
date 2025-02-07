interface FunnelStep<T> {
  name: string;
  requiredFields: Array<keyof T>;
}

interface UseFunnelProps<T> {
  steps: FunnelStep<T>[];
  initialContext: T;
}

/** Funnel 컴포넌트의 기본 Props */
interface BaseFunnelStepComponentProps<T> {
  moveToNextStep?: (newContextData?: Partial<T>) => void;
  moveToPreviousStep?: () => void;
}

export type { FunnelStep, UseFunnelProps, BaseFunnelStepComponentProps };
