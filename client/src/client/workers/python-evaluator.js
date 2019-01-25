/* global Sk */
/* eslint-disable */
importScripts(
  '/js/skulpt.min.js',
  '/js/skulpt-stdlib.js'
);
/* eslint-enable */

const oldLog = self.console.log.bind(self.console);
self.console.log = function proxyConsole(...args) {
  self.postMessage({ type: 'LOG', data: String(args) });
  return oldLog(...args);
};

self.onmessage = async e => {
  /* eslint-disable no-unused-vars */
  const { code = '' } = e.data;
  let consoleTestPassed = false;
  let {type, testString} = e.data;

  /* eslint-disable no-eval */
  const testResult = eval(testString);
  /* eslint-enable no-eval */

  if (type === 'input') {
    if (testResult(code)) {
      self.postMessage({ pass: true });
    } else {
      self.postMessage({
        err: {
          message: 'Error'
        }
      });
    }
  } else if (type === 'console') {

    Sk.python3 = true;
    Sk.pre = 'output';
    Sk.configure({output: outf, read: builtinRead});
    var myPromise = Sk.misceval.asyncToPromise(function() {
      return Sk.importMainWithBody('<stdin>', false, code, true);
    });
    myPromise.then(function(mod) {
      if (consoleTestPassed) {
          self.postMessage({ pass: true });
      } else {
        self.postMessage({
          err: {
            message: 'Error'
          }
        });
      }
    },
      function(err) {
        console.log(err);
        self.postMessage({
          err: {
            message: err.toString()
          }
        });
    });
  }

  // Skulpt calls this function with the console output of the Python code
  function outf(output) {
    output = output.replace(/\n$/, '');
    console.log(output);

    if (testResult(output)) {
        consoleTestPassed = true;
    }
  }

  function builtinRead(x) {
    /* eslint-disable max-len, no-undefined*/
    if (Sk.builtinFiles === undefined || Sk.builtinFiles['files'][x] === undefined) {
      throw "File not found: '" + x + "'";
    }
    /* eslint-enable max-len, no-undefined*/
    return Sk.builtinFiles['files'][x];
  }
};
