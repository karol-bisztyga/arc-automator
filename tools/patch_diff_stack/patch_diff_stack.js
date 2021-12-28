const readline = require('readline');
const util = require("util");
const exec = util.promisify(require("child_process").exec);

async function executeCommand(command) {
  // console.log('execute command: ', command)
  const { stdout, stderr } = await exec(command);
  return stdout;
}

async function applyDiffs(branchName, diffs) {
  console.log('applying diffs...');
  try {
    for (diff of diffs) {
      console.log(`applying diff: ${diff}`);
      await executeCommand(`arc patch ${diff}`);
      const currentCommitHash = await executeCommand(`git rev-parse HEAD`);
      // console.log(`current commit hash: ${currentCommitHash}`);
      await executeCommand(`git checkout ${branchName}`);
      await executeCommand(`git cherry-pick ${currentCommitHash}`);
      await executeCommand(`git branch -D arcpatch-${diff}`);
    }
  } catch(e) {
    console.log('something went wrong: ', e);
    return;
  }
  console.log('done applying diffs');
}

async function readUserInput(prompt) {
  const rl = readline.createInterface(process.stdin, process.stdout);
  return new Promise((resolve, reject) => {
    rl.question(
      prompt,
      (answer) => {
        rl.close();
        console.log('resolve', answer);
        resolve(answer);
      }
    );
  });
}

async function perform() {
  const branchName = await readUserInput("enter the target branch name: ");
  const diffs = (await readUserInput("enter space-separated list of diffs in the stack [format: DXXXX]: ")).split(' ');
  await applyDiffs(branchName, diffs);
}

exports.perform = perform;
