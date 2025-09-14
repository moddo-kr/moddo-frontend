const colors = [
  '#ff9958',
  '#A59CC7',
  '#9747FF',
  '#9EB6D0',
  '#B4CBDD',
  '#BAC5A5',
  '#EEBFD3',
  '#FDAB96',
  '#FDB456',
  '#FDEBA9',
];

/** colors 배열 안의 색을 리턴하는 함수 */
export const getRandomColor = (index: number) => {
  const color = colors[index % colors.length];
  return color;
};
