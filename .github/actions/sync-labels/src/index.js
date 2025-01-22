import * as core from "@actions/core"; // https://github.com/actions/toolkit/tree/main/packages/core
import * as github from "@actions/github"; // https://github.com/actions/toolkit/tree/main/packages/github

/** 메인 액션 함수 */
const run = async () => {
  try {
    const token = core.getInput("token");
    const octokit = github.getOctokit(token);
    const { context } = github;

    const { prNumber, branchName, owner, repo } = getPRContext(context);

    // step 1. 이슈 라벨 추출
    const issueNumber = getIssueNumber(branchName);
    if (!issueNumber) {
      core.info("💬 브랜치 이름에 이슈 번호가 없습니다. 액션을 종료합니다.");
      return;
    }
    core.info(`💬 연결된 이슈 번호: #${issueNumber}`);

    const issueLabels = await getIssueLabels(octokit, owner, repo, issueNumber);
    if (!issueLabels) {
      core.info(
        `💬 이슈 #${issueNumber}에 라벨이 없습니다. 액션을 종료합니다.`
      );
      return;
    }
    core.info(`💬 이슈 #${issueNumber}에 있는 라벨: ${issueLabels.join(", ")}`);

    // step 2. PR에 라벨 추가
    await addLabelsToPR(octokit, owner, repo, prNumber, issueLabels);
    core.info("✅ PR에 라벨이 추가되었습니다.");
  } catch (error) {
    core.setFailed(`❌ 오류가 발생했습니다: ${error.message}`);
  }
};

/**
 * PR 관련 정보를 추출하는 함수
 * @param {github.context} context - github context
 */
const getPRContext = (context) => {
  const prNumber = context.payload.pull_request.number;
  const branchName = context.payload.pull_request.head.ref;
  const owner = context.repo.owner;
  const repo = context.repo.repo;

  return { prNumber, branchName, owner, repo };
};

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

/**
 * 이슈의 라벨을 가져오는 함수
 * @param {ReturnType<typeof github.getOctokit>} octokit - octokit
 * @param {string} owner - owner
 * @param {string} repo - repo
 * @param {number} issueNumber - 이슈 번호
 * @returns {string[]} issueLabels - 이슈 라벨
 * @see https://octokit.github.io/rest.js/v21/#issues-get
 */
const getIssueLabels = async (octokit, owner, repo, issueNumber) => {
  const issueResponse = await octokit.rest.issues.get({
    owner,
    repo,
    issue_number: issueNumber,
  });
  if (!issueResponse.data) return;

  const issueLabels = issueResponse.data.labels.map((label) => label.name);
  if (issueLabels.length === 0) return;

  return issueLabels;
};

/**
 * PR에 라벨을 추가하는 함수
 * @param {ReturnType<typeof github.getOctokit>} octokit - octokit
 * @param {string} owner - owner
 * @param {string} repo - repo
 * @param {number} prNumber - PR 번호
 * @param {string[]} labels - pr에 추가할 이슈의 라벨 목록
 * @see https://octokit.github.io/rest.js/v21/#pulls-get
 * @see https://docs.github.com/ko/rest/pulls/pulls?apiVersion=2022-11-28#get-a-pull-request
 * @see https://octokit.github.io/rest.js/v21/#issues-add-labels
 * @see https://docs.github.com/ko/rest/issues/labels?apiVersion=2022-11-28#add-labels-to-an-issue
 */
const addLabelsToPR = async (octokit, owner, repo, prNumber, labels) => {
  // step 1. 기존 PR 라벨 가져오기
  const prData = await octokit.rest.pulls.get({
    owner,
    repo,
    pull_number: prNumber,
  });
  const prLabels = prData.data.labels.map((label) => label.name);

  // step 2. 기존 PR 라벨과 이슈 라벨을 합쳐서 새로운 라벨 목록 생성
  const newLabels = [...new Set([...prLabels, ...labels])];

  // step 3. PR에 라벨 추가
  await octokit.rest.issues.addLabels({
    owner,
    repo,
    issue_number: prNumber,
    labels: newLabels,
  });
};

run();
