---
description: shared/ui/Text와 TextVariant 사용처를 디자인 시스템 토큰 기반 코드로 마이그레이션합니다.
argument-hint: '[대상 파일 또는 디렉토리] [dry-run|apply]'
---

`shared/ui/Text`와 `TextVariant` 사용처를 제거한다.

## 입력

- 대상: $ARGUMENTS[0] (마이그레이션할 파일 또는 디렉토리)
- 모드: $ARGUMENTS[1]
  - `dry-run` 또는 생략: 보고만 한다.
  - `apply`: 승인된 자동 치환 가능 대상만 수정한다.

## 전제

- 요청받은 범위만 확인/수정한다.
- `dry-run` 없이 수정하지 않는다.
- 미확정 토큰 매핑은 추측하지 않는다.
- 새 범용 `Text` wrapper를 만들지 않는다.

## 토큰 매핑 규칙

확정된 매핑만 사용한다. 미확정 key는 `TBD`로 보고하고 수정하지 않는다.

### Typography

`applyTypography`을 `@/shared/design-system`에서 named import해서 사용한다.

```text
body1Sb -> typography.body.medium-semibold
body1R -> typography.body.medium
body2Sb -> typography.body.small-semibold
body2R -> typography.body.small
caption -> typography.caption.xsmall (font-weight: 400)
heading1 -> typography.heading.medium
heading2 -> typography.heading.small
title -> typography.title.small
```

`caption`은 동일한 12px/500 토큰이 없어 `typography.caption.xsmall`로 의도 매핑한다.

### Color

`getToken`을 `@/shared/design-system`에서 named import해서 사용한다.

```text
semantic.orange.default -> fg.primary.normal
semantic.state.danger -> fg.accent-red.normal
semantic.text.default -> fg.neutral
semantic.text.inverse -> fg.inverse.normal
semantic.text.strong -> fg.normal
semantic.text.subtle -> fg.alternative
```

## 작성 규칙

- Text 치환용 styled component는 가능한 한 같은 디렉토리의 styles 파일에 작성한다.
- styles 파일이 이미 있으면 거기에 추가한다.
- styles 파일이 없으면 같은 디렉토리에 기존 네이밍 규칙에 맞는 styles 파일을 만든다.
- 사용처에서는 `import * as S from './...styles'` 패턴으로 사용한다.
- styled component 이름은 화면/역할 의미가 드러나게 짓는다.
- `Text`, `StyledText`, `TextWrapper`처럼 의미 없는 이름은 피한다.

## 치환 규칙

### TextVariant

- `TextVariant('<legacy>')`는 확정 매핑이 있을 때만 `applyTypography('<semantic>')`로 치환한다.
- 조건부 표현식은 확정된 branch만 치환한다.
- `font-size: ${TextVariant(...)}`는 자동 치환하지 않고 수동 수정 대상으로 보고한다.
- `applyTypography`는 `@/shared/design-system`에서 named import 한다.
- 파일에서 `TextVariant`가 사라진 경우에만 `@/shared/ui/Text/index.styles` import를 제거한다.

### Text 컴포넌트

- props 없는 `<Text>`는 `styled.span` + `applyTypography('typography.body.medium')`로 치환하고 color는 지정하지 않는다.
- `variant`와 `color`가 있으면 확정된 토큰 매핑에 따라 styles 파일에 직접 반영한다.
- `as`가 있으면 해당 HTML 의미를 유지해 `styled.p`, `styled.span`, `styled.h*` 등으로 반영한다.
- `style`과 `textAlign`은 JSX prop으로 유지하지 않고 styles 파일로 옮긴다.
- `styled(Text)`는 `styled.span` + `applyTypography('typography.body.medium')`로 풀고, 사용부의 `variant`/`color` props는 확정 매핑에 따라 직접 반영한다.

## dry-run 출력 형식

파일을 수정하지 않고 아래 형식으로 보고한다.

```text
- <file>
  - 유형: TextVariant | Text component
  - 사용처: <패턴>
  - 매핑: <semantic 또는 TBD>
  - 제안: <자동 치환 가능 | 수동 확인 필요 | 보류>
  - 사유: <짧게>
```

## 작업 순서

1. 대상 범위에서 `TextVariant(`, `shared/ui/Text`, `<Text`, `styled(Text)` 사용처를 검색한다.
2. legacy key와 위험 패턴 여부를 확인한다.
3. `dry-run`이면 보고만 하고 종료한다.
4. `apply`이면 승인된 자동 치환 가능 대상만 수정한다.
5. 수정 후 남은 `TextVariant`/`shared/ui/Text` 사용처를 보고한다.

## 중단 조건

- semantic token 매핑이 미확정인 경우
- 자동 치환하면 CSS 구조가 깨질 수 있는 경우
- 수정 범위가 불명확한 경우
- `dry-run` 결과 승인이 없는 경우

이 경우 구현을 멈추고 확인 질문을 먼저 한다.
