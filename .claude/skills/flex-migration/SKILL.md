---
description: shared/ui/Flex 사용처를 로컬 styled component 기반 레이아웃으로 마이그레이션합니다.
argument-hint: "[대상 파일 또는 디렉토리] [dry-run|apply]"
---

`shared/ui/Flex` 사용처를 제거한다.

## 입력

- 대상: $ARGUMENTS[0] (마이그레이션할 파일 또는 디렉토리)
- 모드: $ARGUMENTS[1]
  - `dry-run` 또는 생략: 보고만 한다.
  - `apply`: 승인된 자동 치환 가능 대상만 수정한다.

## 전제

- 요청받은 범위만 확인/수정한다.
- `dry-run` 없이 수정하지 않는다.
- 새 범용 `Flex` wrapper를 만들지 않는다.

## 작성 규칙

- Flex 치환용 styled component는 가능한 한 같은 디렉토리의 styles 파일에 작성한다.
- styles 파일이 이미 있으면 거기에 추가한다.
- styles 파일이 없으면 같은 디렉토리에 기존 네이밍 규칙에 맞는 styles 파일을 만든다.
- 사용처에서는 `import * as S from './...styles'` 패턴으로 사용한다.
- styled component 이름은 화면/역할 의미가 드러나게 짓는다.
- `Flex`, `StyledFlex`, `FlexWrapper`처럼 의미 없는 이름은 피한다.

## 토큰 매핑 규칙

토큰 매핑 규칙에 없는 것을 절대 임의로 매핑하지 않는다.

### Spacing

- gap/padding은 semantic token이 있으면 `getToken`을 사용한다.
- gap/padding에 semantic token이 없으면 rem 단위로 직접 작성하고 “semantic token으로 정의되지 않은 의도적 값” 주석을 남긴다.
- margin은 semantic token이 없으므로 rem 단위로 직접 작성한다.
- rem 변환은 16px = 1rem 기준으로 한다.
- 기존 Flex 숫자 prop은 `theme.unit`에 없으면 `값 * 4px`로 계산한다.

```text
mx={5} -> 20px -> 1.25rem
pb={93px} -> 5.8125rem
```

### Color

`getToken`을 `@/shared/design-system`에서 named import해서 사용한다.

```text
#fff -> bg.normal
semantic.background.normal.alternative -> bg.neutral
theme.color.semantic.background.normal.alternative -> bg.neutral
theme.color.semantic.background.normal.default -> bg.normal
theme.color.semantic.orange.subtle -> fill.primary.assistive (HACK)
theme.color.semantic.primary.default -> fill.inverse.neutral
```

`theme.color.semantic.orange.subtle`은 디자이너 승인 전 임의 판단이므로 HACK 주석을 남긴다.

### Radius

```text
theme.radius.default -> radius.lg
```

## 치환 규칙

- `<Flex>`는 사용처 의미에 맞는 로컬 styled component로 치환한다.
- 치환한 styled component에는 `display: flex`를 명시한다. `inline`이 있으면 `inline-flex`를 사용한다.
- Flex layout props는 동일한 CSS 속성으로 옮긴다: `direction`, `alignItems/align`, `justifyContent/justify`, `flexWrap/wrap`, `flexGrow/grow`, `flexShrink/shrink`, `flexBasis/basis`.
- style props는 동일한 CSS 속성으로 옮긴다: `flex`, `height`, `width`, `position`, `overflow`, `boxSizing`.
- spacing/color/radius props는 토큰 매핑 규칙에 따라 옮긴다.
- `key`, `ref`, 이벤트 핸들러, 접근성 속성은 JSX에 남긴다.
- 동적 layout 값은 transient prop(`$prop`)으로 전달한다.
- `as`, `style`, 조건부 layout prop은 자동 치환하지 않고 수동 확인 대상으로 보고한다.

## dry-run 출력 형식

파일을 수정하지 않고 아래 형식으로 보고한다.

```text
- <file>
  - 사용처: <패턴>
  - 제안: <자동 치환 가능 | 수동 확인 필요 | 보류>
  - 사유: <짧게>
```

## 작업 순서

1. 대상 범위에서 `shared/ui/Flex`, `<Flex` 사용처를 검색한다.
2. 사용 props와 위험 패턴 여부를 확인한다.
3. `dry-run`이면 보고만 하고 종료한다.
4. `apply`이면 승인된 자동 치환 가능 대상만 수정한다.
5. 수정 후 남은 `shared/ui/Flex` 사용처를 보고한다.

## 중단 조건

- 자동 치환하면 레이아웃 구조가 깨질 수 있는 경우
- 토큰 매핑 규칙에 없는 토큰이 있는 경우
- 수정 범위가 불명확한 경우
- `dry-run` 결과 승인이 없는 경우

이 경우 구현을 멈추고 확인 질문을 먼저 한다.
