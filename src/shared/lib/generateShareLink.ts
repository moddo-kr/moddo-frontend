import { generatePath } from 'react-router';
import { BASE_URL, ROUTE } from '../config/route';

const generateShareLink = (groupToken: string) => {
  return `${BASE_URL}${generatePath(ROUTE.billDetail, { groupToken })}`;
};

export default generateShareLink;
