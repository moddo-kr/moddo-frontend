import { useCallback, useState } from 'react';
import { FunnelStep, UseFunnelProps } from '../types/useFunnel.type';

/** 현재 단계의 index를 찾는 함수 */
const findStepIndex = <T>(steps: FunnelStep<T>[], currentStep: string) => {
  return steps.findIndex((step) => step.name === currentStep);
};

/** 현재 단계에 필요한 필드가 모두 채워졌는지 확인하는 함수 */
const validateContext = <T>(step: FunnelStep<T>, context: T) => {
  if (step.requiredFields) {
    return step.requiredFields.every((field) => !!context[field]);
  }
  return true;
};

const useFunnel = <T>({ steps, initialContext }: UseFunnelProps<T>) => {
  const [currentStep, setCurrentStep] = useState<string>(steps[0].name); // 현재 단계 이름 - 초기값은 첫번째 단계
  const [context, setContext] = useState<T>(initialContext); // 각 단계별로 저장된 데이터

  /** 단계와 Context를 업데이트하는 함수 */
  const updateStep = useCallback(
    (step: FunnelStep<T>, newContext: T) => {
      // 필요한 필드가 모두 채워진 경우에만 업데이트한다.
      if (validateContext(step, newContext)) {
        setCurrentStep(step.name);
        setContext(newContext);
        return;
      }
      // 필요한 필드가 모두 채워지지 않은 경우에는 첫번째 단계로 이동한다.
      setCurrentStep(steps[0].name);
      setContext(newContext);
    },
    [steps]
  );

  /** public - 다음 단계로 이동하는 함수 */
  const moveToNextStep = (newContextData?: T) => {
    const currentStepIndex = findStepIndex(steps, currentStep);
    // 마지막 단계인 경우에는 Context만 업데이트한다.
    if (currentStepIndex === steps.length - 1) {
      setContext({ ...context, ...newContextData });
      return;
    }

    const nextStepIndex = currentStepIndex + 1;
    const nextStep = steps[nextStepIndex];
    const newContext = { ...context, ...newContextData };

    updateStep(nextStep, newContext);
  };

  /** public - 이전 단계로 이동하는 함수 */
  const moveToPreviousStep = () => {
    const currentStepIndex = findStepIndex(steps, currentStep);
    // 첫번째 단계인 경우에는 이동하지 않는다.
    if (currentStepIndex === 0) return;

    const previousStepIndex = currentStepIndex - 1;
    const previousStep = steps[previousStepIndex];

    updateStep(previousStep, context);
  };

  return {
    currentStep,
    context,
    moveToNextStep,
    moveToPreviousStep,
  };
};

export default useFunnel;
