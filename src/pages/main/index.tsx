import { Card } from '@chakra-ui/react';
import useFunnel from '@/common/hooks/useFunnel';
import { FunnelStep } from '@/common/types/useFunnel.type';
import NameStep from './NameStep';
import { SignUpContext } from './SignUpContext.type';
import AgeStep from './AgeStep';
import IdStep from './IdStep';

const signUpSteps: FunnelStep<SignUpContext>[] = [
  { name: 'NAME', requiredFields: [] },
  { name: 'AGE', requiredFields: ['name'] },
  { name: 'ID', requiredFields: ['name', 'age'] },
];

const initialContext: SignUpContext = {
  name: undefined,
  age: undefined,
  id: 'random-id',
};

function DisplayContext({ context }: { context: SignUpContext }) {
  return (
    <Card.Root>
      <Card.Title>Context</Card.Title>
      <Card.Body>
        <pre>{JSON.stringify(context, null, 2)}</pre>
      </Card.Body>
    </Card.Root>
  );
}

function Main() {
  const { currentStep, context, moveToNextStep, moveToPreviousStep } =
    useFunnel({
      steps: signUpSteps,
      initialContext,
    });

  switch (currentStep) {
    case 'NAME':
      return (
        <div>
          <DisplayContext context={context} />
          <NameStep
            defaultName={context.name}
            moveToNextStep={moveToNextStep}
          />
        </div>
      );
    case 'AGE':
      return (
        <div>
          <DisplayContext context={context} />
          <AgeStep
            name={context.name}
            moveToNextStep={moveToNextStep}
            moveToPreviousStep={moveToPreviousStep}
          />
        </div>
      );
    case 'ID':
      return (
        <div>
          <DisplayContext context={context} />
          <IdStep
            defaultId={context.id}
            moveToNextStep={moveToNextStep}
            moveToPreviousStep={moveToPreviousStep}
          />
        </div>
      );
    default:
      return null;
  }
}

export default Main;
