const core = require('@actions/core');
const github = require('@actions/github');

try {
  const dirty = core.getInput('dirty');
  console.log(`dirty: “${dirty}”`);
  
  const clean = dirty.replace(/[\\\/':<>|*?]/g, '_');
  console.log(`clean: “${clean}”`);
  core.setOutput('clean', clean);
} catch (error) {
  core.setFailed(error.message);
}
