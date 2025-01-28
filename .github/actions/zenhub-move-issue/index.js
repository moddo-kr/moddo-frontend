import * as core from "@actions/core";
import * as github from "@actions/github";
import axios from "axios";
import getIssueNumber from "../utils/getIssueNumber.js";

/** 메인 액션 함수 */
const run = async () => {
  try {
    const { token, zenhubToken, workspaceId, pipelineId } = getActionInputs();

    // step 0. repo id 확인
    const octokit = github.getOctokit(token);
    const { owner, repo } = github.context.repo;
    const repoId = await getRepoId(octokit, owner, repo);
    if (!repoId) {
      throw new Error("레포지토리 ID를 가져올 수 없습니다.");
    }

    // step 1. 이슈 번호 추출
    const branchName = github.context.payload.pull_request.head.ref;
    const issueNumber = getIssueNumber(branchName);
    if (!issueNumber) {
      core.info("💬 브랜치 이름에 이슈 번호가 없습니다. 액션을 종료합니다.");
      return;
    }
    core.info(`💬 연결된 이슈 번호: #${issueNumber}`);

    // step 2. 이슈를 이동
    // https://github.com/ZenHubIO/API?tab=readme-ov-file#move-an-issue-between-pipelines
    const requestUrl = `https://api.zenhub.com/p2/workspaces/${workspaceId}/repositories/${repoId}/issues/${issueNumber}/moves`;
    const requestBody = { pipeline_id: pipelineId, position: "bottom" };
    await axios.post(requestUrl, requestBody, {
      headers: {
        "X-Authentication-Token": zenhubToken,
        "Content-Type": "application/json",
      },
    });
    core.info(`✅ 이슈 #${issueNumber}를 이동했습니다.`);
  } catch (error) {
    core.setFailed(`❌ 오류가 발생했습니다: ${error.message}`);
  }
};

/** 액션에 전달된 인풋을 가져오는 함수 */
const getActionInputs = () => {
  const token = core.getInput("token");
  const zenhubToken = core.getInput("zenhub_token");
  const workspaceId = core.getInput("workspace_id");
  const pipelineId = core.getInput("pipeline_id");

  return { token, zenhubToken, workspaceId, pipelineId };
};

/**
 * 레포지토리 ID를 가져오는 함수
 * @see https://octokit.github.io/rest.js/v21/#repos-get
 * @see https://docs.github.com/ko/rest/repos/repos?apiVersion=2022-11-28#get-a-repository
 */
const getRepoId = async (octokit, owner, repo) => {
  const { data } = await octokit.rest.repos.get({ owner, repo });
  return data.id;
};

// 액션을 실행
run();
