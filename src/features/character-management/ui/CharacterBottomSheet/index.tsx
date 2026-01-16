import AsyncBoundary from '@/shared/ui/AsyncBoundary';
import BottomSheet from '@/shared/ui/BottomSheet';
import Loading from '@/shared/ui/Loading';
import CharacterBottomSheetContent from './CharacterBottomSheetContent';

interface CharacterBottomSheetProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

function CharacterBottomSheet({ open, setOpen }: CharacterBottomSheetProps) {
  return (
    <BottomSheet open={open} setOpen={setOpen}>
      <AsyncBoundary loadingFallback={<Loading />}>
        <CharacterBottomSheetContent setOpen={setOpen} />
      </AsyncBoundary>
    </BottomSheet>
  );
}

export default CharacterBottomSheet;
