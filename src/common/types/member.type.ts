export interface Member {
  id: string;
  name: string;
  /** @todo role은 추후 논의 후 수정하기 */
  role: 'treasurer' | 'participant';
}
