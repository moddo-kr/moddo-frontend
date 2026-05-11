import styled from 'styled-components';
import { applyTypography, getToken } from '@/shared/design-system';
import { Button } from '@/shared/design-system/ui';

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  svg {
    fill: ${getToken('fg.primary.normal')};
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40vh;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BottomWrapper = styled.div`
  position: fixed;
  bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: ${getToken('gap.6')};
  padding: ${`${getToken('padding.6')} ${getToken('padding.6')} 2rem ${getToken('padding.6')}`};
  width: 100%;
  max-width: 600px;
  min-width: 320px;
`;

export const LogoTagline = styled.span`
  ${applyTypography('typography.body.medium')};
  color: ${getToken('fg.alternative')};
`;

export const KakaoLoginLabel = styled.span`
  ${applyTypography('typography.body.medium-semibold')};
  color: ${getToken('fg.normal')};
`;

export const KakaoButton = styled(Button)`
  background: #fee500; /* 카카오 브랜드 컬러 */
`;

export const TermsNotice = styled.span`
  ${applyTypography('typography.caption.xsmall')};
  color: ${getToken('fg.alternative')};
`;

export const LoginPageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;
