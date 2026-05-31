import { BASE_URL, ROUTE } from '@/shared/config/route';
import { generatePath } from 'react-router';

const generateShareLink = (groupToken: string) => {
  return `${BASE_URL}${generatePath(ROUTE.expenseDetail, { groupToken })}`;
};

export default generateShareLink;
