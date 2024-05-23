let options = [
    '--require-module ts-node/register',
    '--require ./tests/steps/*.ts',
    '--format progress',
    '--format json:./reports/cucumber_report.json',
].join(' ');

let run_features = [
    './tests/features/*.feature',
    options,
].join(' ');


module.exports = {
  test_runner: run_features,
};