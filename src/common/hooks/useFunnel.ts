import { useState } from 'react';

interface UseFunnelProps<T> {
  steps: string[];
  initialContext: T;
}

const useFunnel = <T>({ steps, initialContext }: UseFunnelProps<T>) => {
  const [currentStep, setCurrentStep] = useState<string>(steps[0]);
  const [context, setContext] = useState<T>(initialContext);

  /** 입력된 context를 저장하며 다음 단계로 이동하는 함수 */
  const moveToNextStep = (newContext?: { [key: string]: unknown }) => {
    const currentStepIndex = steps.indexOf(currentStep);

    // 정의되지 않은 step인 경우에는 첫번째 step으로 이동한다.
    if (currentStepIndex === -1) {
      setCurrentStep(steps[0]);
      return;
    }
    // 마지막 step인 경우에는 이동하지 않는다.
    if (currentStepIndex === steps.length - 1) {
      return;
    }

    setCurrentStep(steps[currentStepIndex + 1]);
    setContext({ ...context, ...newContext });
  };

  /** 이전 단계로 이동하는 함수 */
  const moveToPreviousStep = () => {
    const currentStepIndex = steps.indexOf(currentStep);
    // 정의되지 않은 step인 경우에는 첫번째 step으로 이동한다.
    if (currentStepIndex === -1) {
      setCurrentStep(steps[0]);
      return;
    }
    // 첫번째 step인 경우에는 이동하지 않는다.
    if (currentStepIndex === 0) {
      return;
    }

    setCurrentStep(steps[currentStepIndex - 1]);
  };

  return { currentStep, context, moveToNextStep, moveToPreviousStep };
};

export { useFunnel };
