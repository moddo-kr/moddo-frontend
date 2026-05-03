import type { Meta, StoryFn } from '@storybook/react';
import Header, { HeaderProps } from '.';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
};

export default meta;

/** 1depth — 텍스트 타이틀 */
export const Depth1Text: StoryFn<HeaderProps> = () => (
  <Header type="1depth" title="마이페이지" />
);

/** 1depth — trailing 포함 */
export const Depth1WithTrailing: StoryFn<HeaderProps> = () => (
  <Header
    type="1depth"
    title="마이페이지"
    trailingIcon={<span>icon</span>}
    trailingSubIcon={<span>sub</span>}
  />
);

/** default — heading + trailing */
export const DefaultWithHeading: StoryFn<HeaderProps> = () => (
  <Header
    type="default"
    title="모임 선택"
    headingIcon={<span>←</span>}
    headingLabel="뒤로가기"
    onHeadingIconClick={() => alert('back')}
  />
);

/** default — heading + trailing 모두 포함 */
export const DefaultFull: StoryFn<HeaderProps> = () => (
  <Header
    type="default"
    title="QR코드"
    headingIcon={<span>←</span>}
    onHeadingIconClick={() => alert('back')}
    trailingIcon={<span>icon</span>}
    trailingLabel="관리"
  />
);
