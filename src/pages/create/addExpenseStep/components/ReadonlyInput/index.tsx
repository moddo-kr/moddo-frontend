import { forwardRef } from 'react';
import { Input } from '@chakra-ui/react';

type InputProps = React.HTMLProps<HTMLInputElement>;
const ReadonlyInput = forwardRef<HTMLInputElement, InputProps>(
  ({ value, onClick, className }, ref) => (
    <Input
      width="100%"
      ref={ref}
      onClick={onClick}
      value={value}
      className={className}
      readOnly
    />
  )
);
ReadonlyInput.displayName = 'ReadonlyInput';

export default ReadonlyInput;
