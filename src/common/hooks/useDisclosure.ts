import { useState } from 'react';

const useDisclosure = (defaultOpen = false) => {
  const [open, setOpen] = useState(defaultOpen);

  return {
    open,
    onOpen: () => setOpen(true),
    onClose: () => setOpen(false),
  };
};

export default useDisclosure;
