import { useState, useRef, useEffect } from 'react';
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

  const selectedLabel = options.find((o) => o.value === value)?.label ?? '';

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (!containerRef.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  function handleOptionClick(optionValue: string) {
    onChange(optionValue);
    setIsOpen(false);
  }

  return (
    <S.Container ref={containerRef}>
      <S.Trigger type="button" onClick={() => setIsOpen((prev) => !prev)}>
        <S.TriggerLabel>{selectedLabel}</S.TriggerLabel>
        <S.ChevronWrapper $isOpen={isOpen}>
          <SvgNext width={24} height={24} />
        </S.ChevronWrapper>
      </S.Trigger>
      {isOpen && (
        <S.DropdownPanel>
          {options.map((option) => (
            <S.OptionItem
              key={option.value}
              type="button"
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
