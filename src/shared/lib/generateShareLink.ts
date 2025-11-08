import { BASE_URL, ROUTE } from '@/shared/config/route';
import { generatePath } from 'react-router';

const generateShareLink = (groupToken: string) => {
  return `${BASE_URL}${generatePath(ROUTE.billDetail, { groupToken })}`;
};

export default generateShareLink;
