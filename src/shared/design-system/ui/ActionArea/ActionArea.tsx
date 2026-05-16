import { BottomSafeArea } from '../BottomSafeArea';
import { Button } from '../Button';
import { TextButton } from '../TextButton';
import * as S from './ActionArea.styles';

type ActionAreaLayout = 'horizontal' | 'vertical';
type ActionAreaPosition = 'static' | 'bottom-fixed';

const ACTION_AREA_BOTTOM_FIXED_PADDING =
  'calc(8rem + env(safe-area-inset-bottom))';

interface ActionAreaAction {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

/**
 * showBottomSafeArea : 하단에 BottomSafeArea 여백을 추가할지 여부를 결정합니다. 기본적으로는 true이고, Dialog같은 컴포넌트에서 false로 설정하여 사용합니다.
 * hasHorizontalPadding : ActionArea의 좌우에 패딩을 추가할지 여부를 결정합니다. 기본적으로는 true이고, Dialog같은 컴포넌트에서 false로 설정하여 사용합니다.
 */
interface ActionAreaProps {
  layout?: ActionAreaLayout;
  position?: ActionAreaPosition;
  mainAction: ActionAreaAction;
  alternativeAction?: ActionAreaAction;
  showBottomSafeArea?: boolean;
  hasHorizontalPadding?: boolean;
}

interface AlternativeActionButtonProps {
  layout: ActionAreaLayout;
  action: ActionAreaAction;
}

function AlternativeActionButton(props: AlternativeActionButtonProps) {
  const { layout, action } = props;

  if (layout === 'vertical') {
    return (
      <TextButton
        size="small"
        onClick={action.onClick}
        disabled={action.disabled}
      >
        {action.label}
      </TextButton>
    );
  }

  return (
    <S.AlternativeButton
      size="medium"
      variant="tertiary"
      onClick={action.onClick}
      disabled={action.disabled}
    >
      {action.label}
    </S.AlternativeButton>
  );
}

function MainActionButton(props: ActionAreaAction) {
  const { label, onClick, disabled } = props;

  return (
    <Button
      size="medium"
      variant="primary"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </Button>
  );
}

function ActionArea(props: ActionAreaProps) {
  const {
    layout = 'vertical',
    position = 'static',
    mainAction,
    alternativeAction,
    showBottomSafeArea = true,
    hasHorizontalPadding = true,
  } = props;

  return (
    <S.Container $position={position}>
      <S.Contents $hasHorizontalPadding={hasHorizontalPadding}>
        <S.Actions $type={layout}>
          <S.MainActionWrapper $type={layout}>
            <MainActionButton {...mainAction} />
          </S.MainActionWrapper>
          {alternativeAction && (
            <S.SubActionWrapper $type={layout}>
              <AlternativeActionButton
                layout={layout}
                action={alternativeAction}
              />
            </S.SubActionWrapper>
          )}
        </S.Actions>
      </S.Contents>
      {showBottomSafeArea && <BottomSafeArea />}
    </S.Container>
  );
}

export { ActionArea, ACTION_AREA_BOTTOM_FIXED_PADDING };
export type {
  ActionAreaProps,
  ActionAreaAction,
  ActionAreaLayout,
  ActionAreaPosition,
};
