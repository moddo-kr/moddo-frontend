import * as github from "@actions/github";

/**
 * 관련된 브랜치 이름에서 이슈 번호를 추출하는 함수
 * @returns {number} issueNumber - 이슈 번호
 * @see https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/accessing-contextual-information-about-workflow-runs
 */
const getIssueNumberFromBranch = () => {
  let branchName = "";

  if (github.context.eventName === "pull_request") {
    // PR 이벤트인 경우
    branchName = github.context.payload.pull_request.head.ref;
  } else if (github.context.eventName === "create") {
    // 브랜치 생성 이벤트인 경우
    branchName = github.context.ref;
  } else {
    return;
  }

  const match = branchName.match(/#(\d+)/);
  if (!match) return;

  const issueNumber = parseInt(match[1], 10);
  return issueNumber;
};

export default getIssueNumberFromBranch;
