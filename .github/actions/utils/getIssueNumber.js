/**
 * 브랜치 이름에서 이슈 번호를 추출하는 함수
 * @param {string} branchName - 브랜치 이름
 * @returns {number} issueNumber - 이슈 번호
 */
const getIssueNumber = (branchName) => {
  const match = branchName.match(/#(\d+)/);
  if (!match) return;

  const issueNumber = parseInt(match[1], 10);
  return issueNumber;
};

export default getIssueNumber;
