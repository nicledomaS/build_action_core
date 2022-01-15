const Executor = require('../core/executor');

const gitApp = 'git';
const gitParams = ['submodule', 'update', '--init', '--recursive'];

function gitSubmoduleUpdateExecutor()
{
    return new Executor(gitApp, gitParams);
}

module.exports.gitSubmoduleUpdateExecutor = gitSubmoduleUpdateExecutor;