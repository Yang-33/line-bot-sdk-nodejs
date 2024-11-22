#!/usr/bin/env zx

import fs from "fs/promises";

const submoduleDir = "line-openapi";
const repo = "line/line-openapi";

// じっさいに、submoduleをつかったレポジトリで試す

async function generatePrInfo() {
    // Submodule ディレクトリに移動
    cd(submoduleDir);

    // Submodule の最新コミットメッセージを取得
    const { stdout: lastCommit } = await $`git log -1 --pretty=%s`;
    console.log("Last commit in submodule:", lastCommit.trim());

    // 最新コミットメッセージから PR 番号 (#数字) を抽出
    const prNumberMatch = lastCommit.match(/#(\d+)/);
    if (!prNumberMatch) {
        console.error("No PR number found in submodule's latest commit. Exiting.");
        process.exit(1);
    }
    const prNumber = prNumberMatch[1];
    console.log("Detected PR number:", prNumber);

    // PR URL を構築
    const prUrl = `https://github.com/${repo}/pull/${prNumber}`;
    console.log("Constructed PR URL:", prUrl);

    // PR 情報を取得
    const prInfo = JSON.parse(await $`gh pr view ${prNumber} --repo ${repo} --json title,body`);
    const prTitle = prInfo.title;
    const prBody = prInfo.body;

    // 出力用 JSON を生成
    const output = {
        url: prUrl,
        title: prTitle,
        body: prBody,
    };
    await fs.writeFile("../pr_info.json", JSON.stringify(output, null, 2));
    console.log("PR information saved to pr_info.json");

    // 作業ディレクトリを元に戻す
    cd("..");
}

await generatePrInfo();
