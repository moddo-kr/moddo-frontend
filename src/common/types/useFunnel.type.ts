interface FunnelStep<T> {
  name: string;
  requiredFields: Array<keyof T>;
  onlyManualMove?: boolean; // 수동으로 이동하는 단계의 경우에만 true (moveToNextStep, moveToPreviousStep 함수의 대상이 아님)
}

interface UseFunnelProps<T> {
  steps: FunnelStep<T>[];
  initialContext: T;
}

/** Funnel 컴포넌트의 기본 Props */
interface BaseFunnelStepComponentProps<T> {
  moveToNextStep?: (newContextData?: Partial<T>) => void;
  moveToPreviousStep?: () => void;
  moveToStep?: (stepName: string, newContextData?: Partial<T>) => void;
}

export type { FunnelStep, UseFunnelProps, BaseFunnelStepComponentProps };
