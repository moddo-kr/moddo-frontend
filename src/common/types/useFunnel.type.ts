interface FunnelStep<T> {
  name: string;
  requiredFields: Array<keyof T>;
}

interface UseFunnelProps<T> {
  steps: FunnelStep<T>[];
  initialContext: T;
}

export type { FunnelStep, UseFunnelProps };
