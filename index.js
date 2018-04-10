const mocha = require('mocha');

function MochaProfileReporter(runner) {
  mocha.reporters.Spec.call(this, runner);

  runner.on('test', function(test){
    console.profile(test.fullTitle());
  });

  runner.on('test end', function(test, err){
    console.profileEnd(test.fullTitle());
  });
}

module.exports = MochaProfileReporter;