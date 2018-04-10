const mocha = require('mocha');

const Spec = mocha.reporters.Spec;

function MochaProfileReporter(runner) {
  Spec.call(this, runner);

  runner.on('test', (test) => {
    console.profile(test.fullTitle());
  });

  runner.on('test end', (test, err) => {
    console.profileEnd(test.fullTitle());
  });
}

mocha.utils.inherits(MochaProfileReporter, Spec);
module.exports = MochaProfileReporter;