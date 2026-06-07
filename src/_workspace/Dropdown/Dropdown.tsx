import { useState, useRef, useEffect, useId } from 'react';
import SvgArrowDown from '@/shared/assets/svgs/icon/ArrowDown';
import SvgConfirm from '@/shared/assets/svgs/icon/Confirm';
import * as S from './Dropdown.styles';

interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  label?: string;
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

function Dropdown(props: DropdownProps) {
  const { label, options, value, onChange, placeholder = '선택' } = props;
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();

  const selectedOption = options.find((option) => option.value === value);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    function handleOutsideClick(e: MouseEvent) {
      if (!containerRef.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  function handleOptionClick(optionValue: string) {
    onChange(optionValue);
    setIsOpen(false);
  }

  return (
    <S.Container ref={containerRef}>
      {label && <S.Label>{label}</S.Label>}
      <S.TriggerWrap>
        <S.Trigger
          type="button"
          $isOpen={isOpen}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-controls={isOpen ? listboxId : undefined}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <S.ValueText $isPlaceholder={!selectedOption}>
            {selectedOption?.label ?? placeholder}
          </S.ValueText>
          <S.ChevronWrapper $isOpen={isOpen}>
            <SvgArrowDown width={24} height={24} />
          </S.ChevronWrapper>
        </S.Trigger>
        {isOpen && (
          <S.Panel id={listboxId} role="listbox">
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
          </S.Panel>
        )}
      </S.TriggerWrap>
    </S.Container>
  );
}

export { Dropdown };
export type { DropdownProps, DropdownOption };
