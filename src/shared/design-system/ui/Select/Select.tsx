import { useState, useRef, useEffect, useId } from 'react';
import SvgNext from '@/shared/assets/svgs/icon/Next';
import SvgConfirm from '@/shared/assets/svgs/icon/Confirm';
import * as S from './Select.styles';

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
}

function Select({ options, value, onChange }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();

  // 선택 전 placeholder 문구가 필요해지면 placeholder prop 추가 검토.
  const selectedLabel = options.find((o) => o.value === value)?.label ?? '선택';

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    function handleOutsideClick(e: MouseEvent) {
      if (!containerRef.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleFocusOut(e: FocusEvent) {
      const nextTarget = e.relatedTarget as Node | null;

      if (!nextTarget || !containerRef.current?.contains(nextTarget)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('focusout', handleFocusOut);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('focusout', handleFocusOut);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  function handleOptionClick(optionValue: string) {
    onChange(optionValue);
    setIsOpen(false);
  }

  return (
    <S.Container ref={containerRef}>
      <S.Trigger
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls={isOpen ? listboxId : undefined}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <S.TriggerLabel>{selectedLabel}</S.TriggerLabel>
        <S.ChevronWrapper $isOpen={isOpen}>
          <SvgNext width={24} height={24} />
        </S.ChevronWrapper>
      </S.Trigger>
      {isOpen && (
        <S.DropdownPanel id={listboxId} role="listbox">
          {options.map((option) => (
            <S.OptionItem
              key={option.value}
              type="button"
              role="option"
              aria-selected={option.value === value}
              onClick={() => handleOptionClick(option.value)}
            >
              <S.OptionLabel $isSelected={option.value === value}>
                {option.label}
              </S.OptionLabel>
              {option.value === value && (
                <S.ConfirmIconWrapper>
                  <SvgConfirm width={14} height={10} />
                </S.ConfirmIconWrapper>
              )}
            </S.OptionItem>
          ))}
        </S.DropdownPanel>
      )}
    </S.Container>
  );
}

export { Select };
export type { SelectProps, SelectOption };
