import * as core from "@actions/core";
import * as github from "@actions/github";
import axios from "axios";
import { getIssueNumber } from "../utils";

/** 메인 액션 함수 */
const run = async () => {
  try {
    const { zenhubToken, workspaceId, repoId, pipelineId } = getActionInputs();

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
  const zenhubToken = core.getInput("zenhub-token");
  const workspaceId = core.getInput("workspace-id");
  const repoId = core.getInput("repo-id");
  const pipelineId = core.getInput("pipeline-id");

  return { zenhubToken, workspaceId, repoId, pipelineId };
};

// 액션을 실행
run();
