---
description: 제공받은 피그마 링크를 기반으로 디자인 시스템을 활용해서 컴포넌트를 구현합니다.
argument-hint: "[피그마 링크] [컴포넌트 이름]"
---

피그마 링크의 컴포넌트를 분석하여 디자인 시스템을 활용한 React 컴포넌트 코드를 생성합니다.

## 입력

- 피그마 링크: $ARGUMENTS[0]
- 컴포넌트 이름: $ARGUMENTS[1]

## 전제

- 입력이 불완전하거나 모호하면 구현하지 말고 먼저 확인 질문을 한다.
- 구현을 시작하기 전에 요구사항, variant, props, 토큰 매핑, 기존 컴포넌트 재사용 여부를 먼저 확인한다.
- 조금이라도 모호한 점이 있으면 추정해서 진행하지 말고 확인 질문을 우선한다.
- 비즈니스 로직, API 호출은 포함하지 않는다.

# 디렉토리 구조

기본적으로 src/_workspace 디렉토리에 컴포넌트를 생성한다. (예: src/_workspace/Button)

생성 경로는 아래 구조를 따른다.

```text
src/_workspace/
  <ComponentName>/
    <ComponentName>.tsx
    <ComponentName>.styles.ts
    <ComponentName>.stories.tsx   # 요구한 경우만 생성
    index.ts
```

# 구현 규칙

- 스타일링은 styled-components를 사용한다.
- styled 컴포넌트는 항상 별도의 .styles.ts 파일에 작성한다.
- 스타일 파일은 import * as S from './<ComponentName>.styles'; 형태로 사용한다.
- props 타입은 컴포넌트 파일 상단에 먼저 정의한다.
- 컴포넌트는 반드시 function 선언으로 작성한다.
- 컴포넌트 export는 정의부에서 하지 않고 파일 하단에서 모아서 export 한다.
- styles 파일의 export 방식은 자유롭게 하되, 소비 측에서는 * as S로 import 한다.
- 색상/간격/반경/레이아웃은 getToken만 사용한다.
- 타이포그래피는 getTypographyToken만 사용한다.
- atomic 토큰 직접 사용 금지.
- theme.color, theme.unit, theme.radius, theme.typography 직접 사용 금지.
- 하드코딩 값 사용 금지. 토큰으로 표현 불가능하면 먼저 확인한다.
- 임의로 맥락을 추정해서 구현하지 말고, 모호하거나 부족한 부분이 있다면 먼저 확인 질문을 한다.

# 작업 순서

1. Figma 구조와 variant, 상태, 인터랙션 범위를 파악한다.
2. 기존 shared/design-system에 재사용 가능한 컴포넌트가 있는지 확인한다. (기존 공용 컴포넌트로 충분하면 신규 생성보다 재사용/확장을 우선 검토한다.)
3. 필요한 props와 variant API를 먼저 설계한다.
4. 각 시각 속성을 semantic token으로 매핑할 수 있는지 확인한다.
5. 확인이 끝난 뒤 .tsx, .styles.ts, index.ts를 작성한다.
6. 작업 완료 후 스토리북 스토리 파일 필요 여부를 묻고, 필요하다면 .stories.tsx 파일을 작성한다.

# 중단 조건

- semantic token으로 대응되지 않는 값이 필요한 경우
- variant 구조가 불명확한 경우
- 기존 컴포넌트를 확장할지 신규 생성할지 불명확한 경우
- Figma와 코드 구조가 충돌하는 경우

이 경우 구현을 멈추고 확인 질문을 먼저 한다.
