import { generatePath } from 'react-router';
import { BASE_URL, ROUTE } from '@/shared/constants/route';

const generateShareLink = (groupToken: string) => {
  return `${BASE_URL}${generatePath(ROUTE.billDetail, { groupToken })}`;
};

export default generateShareLink;
