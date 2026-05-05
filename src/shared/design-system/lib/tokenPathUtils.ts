/** 'fg.strong' 같은 토큰 경로를 CSS 변수 세그먼트('fg-strong')로 변환 */
function tokenPathToVarSegment(path: string): string {
  return path.replace(/\./g, '-');
}

/** 'typography.body.medium' 같은 typography 토큰 경로에서 'typography.' prefix를 제거하고 CSS 변수 키로 변환 */
function typographyPathToVarKey(path: string): string {
  return tokenPathToVarSegment(path.replace(/^typography\./, ''));
}

export { tokenPathToVarSegment, typographyPathToVarKey };
