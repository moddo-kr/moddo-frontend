/**
 * 파일 경로에서 bankName과 URL을 매핑하여 배열 리턴
 * 파일 이름에서 bankName을 추출하고, URL을 매핑
 * bankName=경남.png -> 경남
 * */
export const getBankImagesAndUrl = () => {
  const files = import.meta.glob('/src/assets/pngs/banks/bankName=*.png');

  const bankNames = Object.keys(files).map((filePath) => {
    const bankName = filePath.split('=')[1].split('.')[0];
    const url = `/src/assets/pngs/banks/${filePath.split('/').pop()}`;
    return { bankName, url };
  });

  return bankNames;
};
